// src/components/ResultTable.js

import React from 'react';

const ResultTable = ({ results }) => {
  // Enhanced function to format values
  const formatValue = (key, value) => {
    if (key.includes("Rank")) {
      // If the attribute name includes "Rank", parse and return as integer
      return parseInt(value, 10);
    } else if (key.includes("Ship")){
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
          <th>Subjects</th>
          <th>Results</th>
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
            <td colSpan="2">No results found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
