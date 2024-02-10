// src/pages/examResults.js

import React, { useState } from 'react';
import ResultTable from '../components/ResultTable';
import '../css/Result.css';
import * as XLSX from 'xlsx';

const ExamResults = () => {
  const [name, setName] = useState(''); // State for the input name
  const [results, setResults] = useState([]); // State for storing the search results

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const readExcelFile = async () => {
    const filePath = '/Ships_Info.xlsx'; // Update this path
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];

    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
  };

  const handleSearch = async () => {
    const data = await readExcelFile();
    const searchQuery = name.toLowerCase();

    const filteredResults = data.filter((row) =>
      row.Ship.toLowerCase().includes(searchQuery)
    );

    setResults(filteredResults); // Correctly using setResults to update the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleRedirect = () => {
    window.location.href = '/docs/Intro';
  };

  const handleRedirect1 = () => {
    window.location.href = 'https://docs.google.com/spreadsheets/d/1k17zEyO7Cjw9fKIRUJcpI5BuBmOFcKPP/edit?usp=sharing&ouid=115389403212732252038&rtpof=true&sd=true';
  };

  // Inside the ExamResults component render method
  return (
    <div className="centered-container">
      <h1>Phoenix 2 General Ship Exam - Results</h1>
      <p>Check the exam results for the ships in Phoenix 2.</p>
      <div className="introduction-block">
        <p>Descriptions:</p>
        <p>The exam result is composed of several parts. The major subjects are Main, Aura, and Zen. The minor subjects are Survival, Speedrun, and Fun.
            Also there is an additional subject: APEX.
        </p>
        <p>The total score for Main, Aura, and Zen are 150, 120, 120. And for Survival, Speedrun, and Fun are 60. The APEX has a total score of 80.</p>
        <p>For the minor subjects, each ship will be categorized into different tiers: S, A+, A, A-, B+, B, B-, C+, C, C-, D.
            Corresponding to top 5%, 15%, 25%, ..., 95%, 100%.
        </p>
        <p>The Base Score is the sum of the major subjects (390 in total).
            The APEX Score is the sum of major subjects and the higher APEX score (470 in total).
            The Final Score is the sum of all the subjects (650 in total).
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your ship's name"
            className="search-input" // Apply the new class to the input field
        />
        <button type="submit" className="search-button">Check Results</button>
      </form>
      <br></br>
      <ResultTable results={results} />
      <button className="redirect-button" onClick={handleRedirect1}>Check the full result</button>
      <button className="redirect-button" onClick={handleRedirect}>Back to wiki</button>
    </div>
  );
  
};

export default ExamResults;
