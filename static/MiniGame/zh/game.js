let shipsData = [];
let gameState = { answer: null, guesses: [], attemptCount: 0 };

// 表头显示用中文，但内部取值用英文 key
const headers = ["战机名","主炮类型","光环","禅宗","稀有度","Apex1","Apex2"];
const keysOrder = ["name","type","aura","zen","rarity","apex1","apex2"];

const inputEl = document.getElementById('guessInput');
const suggestionsEl = document.getElementById('suggestions');
const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
const attemptsEl = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');
const messageEl = document.getElementById('message');
const surrenderBtn = document.getElementById('surrenderBtn');

// 初始化
async function loadData() {
  try {
    const res = await fetch('/MiniGame/zh/ships.json');
    shipsData = await res.json();
    console.log("✅ 成功加载 ships.json，数量：", shipsData.length);
    buildTableHead();
    initGame();
    setupAutocomplete();
  } catch (err) {
    console.error('❌ 读取数据失败：', err);
    messageEl.textContent = '战机数据加载失败，请检查 ships.json 路径。';
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
  attemptsEl.textContent = `尝试次数: ${gameState.attemptCount}`;
  tableBody.innerHTML = '';
  messageEl.textContent = '';
  inputEl.value = '';
  suggestionsEl.innerHTML = '';
  inputEl.disabled = false; 
  document.querySelectorAll('.answer').forEach(el => el.remove());
  inputEl.focus();
}

// 重新开始
restartBtn.addEventListener('click', initGame);

// 投降
surrenderBtn.addEventListener('click', () => {
  if (gameState.surrendered) return;
  gameState.surrendered = true;

  const answerRow = keysOrder.map(key => gameState.answer[key]);
  const answerHtml = `<div class="answer">正确答案：${answerRow.join(' | ')}</div>`;
  tableHead.insertAdjacentHTML('beforebegin', answerHtml);

  messageEl.textContent = '你已投降！请点击“重新开始”再玩一局。';

  inputEl.disabled = true;
  suggestionsEl.innerHTML = '';
});

// 自动补全
function setupAutocomplete() {
  inputEl.addEventListener('input', () => {
    const val = inputEl.value.trim().toLowerCase();
    suggestionsEl.innerHTML = '';
    if (!val) return;

    const matches = shipsData
      .map(s => s.name) // ✅ 用英文 key
      .filter(name => name.toLowerCase().includes(val))
      .sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(val);
        const bStarts = b.toLowerCase().startsWith(val);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.localeCompare(b, 'zh-CN');
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

// 核心逻辑
function processGuess(name) {
  const guessed = shipsData.find(s => s.name === name);
  if (!guessed) {
    alert('未找到该战机，请确认名称是否正确。');
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
  attemptsEl.textContent = `尝试次数: ${gameState.attemptCount}`;

  renderTable();

  const lastAllGreen = row.every(c => c.color === 'green');
  if (lastAllGreen) {
    messageEl.textContent = `恭喜！你猜对了（${answer.name}）。共猜了 ${gameState.attemptCount} 次。`;
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
