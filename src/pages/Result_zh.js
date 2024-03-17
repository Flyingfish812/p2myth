// src/pages/examResults.js

import React, { useState } from 'react';
import ResultTable from '../components/ResultTable_zh';
import '../css/Result.css';
import * as XLSX from 'xlsx';

const ExamResults = () => {
  const [name, setName] = useState(''); // State for the input name
  const [results, setResults] = useState([]); // State for storing the search results

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const readExcelFile = async () => {
    const filePath = '/Ships_Info_zh.xlsx'; // Update this path
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
      row.战机名.toLowerCase().includes(searchQuery)
    );

    setResults(filteredResults); // Correctly using setResults to update the state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleRedirect = () => {
    window.location.href = '/zh/docs/Intro';
  };

  const handleRedirect1 = () => {
    window.location.href = 'https://docs.google.com/spreadsheets/d/1k17zEyO7Cjw9fKIRUJcpI5BuBmOFcKPP/edit?usp=sharing&ouid=115389403212732252038&rtpof=true&sd=true';
  };

  // Inside the ExamResults component render method
  return (
    <div className="centered-container">
      <h1>Phoenix 2战机综合测试 - 成绩查询</h1>
      <p>查询Phoenix 2战机的综合测试结果</p>
      <div className="introduction-block">
        <p>描述：</p>
        <p>测试结果由几部分组成，大三门为主武器、光环、禅宗，小三门为生存力、竞速力、娱乐性。此外还有一门额外科目：皮肤。</p>
        <p>其中，主武器、光环、禅宗科目各自的满分分别为150、120、120分。生存力、竞速力、娱乐性的满分为60分。皮肤科目的总分为80分。</p>
        <p>对于小三门，每架战机会按照得分分别评级为S, A+, A, A-, B+, B, B-, C+, C, C-, D，分别对应前5%, 15%, 25%, ..., 95%, 100%.</p>
        <p>基础得分为大三门总分（满分为390分），皮肤总分为大三门加上皮肤的总分（满分为470分），最终得分为所有科目总分（满分为650分）。</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="输入战机名称"
            className="search-input" // Apply the new class to the input field
        />
        <button type="submit" className="search-button">查询分数</button>
      </form>
      <br></br>
      <ResultTable results={results} />
      <button className="redirect-button" onClick={handleRedirect1}>查询所有结果</button>
      <button className="redirect-button" onClick={handleRedirect}>回到wiki</button>
    </div>
  );
  
};

export default ExamResults;
