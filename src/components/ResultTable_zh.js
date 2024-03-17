// src/components/ResultTable.js

import React from 'react';

const ResultTable = ({ results }) => {
  // Enhanced function to format values
  const formatValue = (key, value) => {
    if (key.includes("排名")) {
      // If the attribute name includes "Rank", parse and return as integer
      return parseInt(value, 10);
    } else if (key.includes("战机名")){
      return value;
    } else {
      // For other numeric values, format as float with 2 decimal places
      const number = parseFloat(value);
      return isNaN(number) ? value : number.toFixed(2);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>科目</th>
          <th>结果</th>
        </tr>
      </thead>
      <tbody>
        {results.length > 0 ? (
          Object.keys(results[0]).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{formatValue(key, results[0][key])}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">未查询到结果</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
