let shipsData = [];
let gameState = { answer: null, guesses: [], attemptCount: 0 };

// English headers
const headers = ["Name", "Main Gun Type", "Aura", "Zen", "Rarity", "Apex1", "Apex2"];
const keysOrder = ["name", "type", "aura", "zen", "rarity", "apex1", "apex2"];

const inputEl = document.getElementById('guessInput');
const suggestionsEl = document.getElementById('suggestions');
const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
const attemptsEl = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');
const messageEl = document.getElementById('message');
const surrenderBtn = document.getElementById('surrenderBtn');

// Load data
async function loadData() {
  try {
    const res = await fetch('/MiniGame/en/ships.json');
    shipsData = await res.json();
    console.log("✅ Ships loaded:", shipsData.length);
    buildTableHead();
    initGame();
    setupAutocomplete();
  } catch (err) {
    console.error('❌ Failed to load data:', err);
    messageEl.textContent = 'Failed to load ship data. Please check ships.json path.';
  }
}

function buildTableHead() {
  tableHead.innerHTML = '';
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    tableHead.appendChild(th);
  });
}

function initGame() {
  gameState.answer = shipsData[Math.floor(Math.random() * shipsData.length)];
  gameState.guesses = [];
  gameState.attemptCount = 0;
  gameState.surrendered = false;
  attemptsEl.textContent = `Attempts: ${gameState.attemptCount}`;
  tableBody.innerHTML = '';
  messageEl.textContent = '';
  inputEl.value = '';
  suggestionsEl.innerHTML = '';
  inputEl.disabled = false;
  document.querySelectorAll('.answer').forEach(el => el.remove());
  inputEl.focus();
}

// Restart
restartBtn.addEventListener('click', initGame);

// Surrender
surrenderBtn.addEventListener('click', () => {
  if (gameState.surrendered) return;
  gameState.surrendered = true;

  const answerRow = keysOrder.map(key => gameState.answer[key]);
  const answerHtml = `<div class="answer">Correct Answer: ${answerRow.join(' | ')}</div>`;
  tableHead.insertAdjacentHTML('beforebegin', answerHtml);

  messageEl.textContent = 'You have surrendered! Please click "Restart" to try again.';

  inputEl.disabled = true;
  suggestionsEl.innerHTML = '';
});

// Autocomplete
function setupAutocomplete() {
  inputEl.addEventListener('input', () => {
    const val = inputEl.value.trim().toLowerCase();
    suggestionsEl.innerHTML = '';
    if (!val) return;

    const matches = shipsData
      .map(s => s.name) // ✅ Always use English key
      .filter(name => name.toLowerCase().includes(val))
      .sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(val);
        const bStarts = b.toLowerCase().startsWith(val);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.localeCompare(b, 'en');
      });

    matches.forEach(match => {
      const li = document.createElement('li');
      const regex = new RegExp(`(${val})`, 'gi');
      li.innerHTML = match.replace(regex, `<span class="highlight">$1</span>`);
      li.addEventListener('click', () => {
        inputEl.value = match;
        suggestionsEl.innerHTML = '';
        processGuess(match);
        inputEl.value = '';
      });
      suggestionsEl.appendChild(li);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete')) {
      suggestionsEl.innerHTML = '';
    }
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const name = inputEl.value.trim();
      if (!name) return;
      processGuess(name);
      inputEl.value = '';
      suggestionsEl.innerHTML = '';
    }
  });
}

// Guess logic
function processGuess(name) {
  const guessed = shipsData.find(s => s.name === name);
  if (!guessed) {
    alert('Ship not found. Please check the name.');
    return;
  }

  const answer = gameState.answer;

  const row = keysOrder.map(key => {
    const guessedVal = guessed[key];
    const answerVal = answer[key];
    let color = 'red';

    if (guessedVal === answerVal) {
      color = 'green';
    } else {
      if (
        (key === 'apex2' && guessedVal && answer['apex1'] === guessedVal) ||
        (key === 'apex1' && guessedVal && answer['apex2'] === guessedVal)
      ) {
        color = 'orange';
      }
    }

    return { key, value: guessedVal, color };
  });

  gameState.guesses.push(row);
  gameState.attemptCount++;
  attemptsEl.textContent = `Attempts: ${gameState.attemptCount}`;

  renderTable();

  const lastAllGreen = row.every(c => c.color === 'green');
  if (lastAllGreen) {
    messageEl.textContent = `Congratulations! You guessed it (${answer.name}). Total attempts: ${gameState.attemptCount}.`;
  }
}

function renderTable() {
  tableBody.innerHTML = '';
  gameState.guesses.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell.value;
      if (cell.color === 'green') {
        td.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green');
      } else if (cell.color === 'orange') {
        td.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--orange');
      } else {
        td.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red');
      }
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

loadData();
