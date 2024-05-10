import React from 'react';

const ResultTable1 = ({ results }) => {
    const parsedResults = typeof results === 'string' ? results.split(', ') : [];
    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Ship1</th>
                            <th>Ship2</th>
                            <th>Ship3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{parsedResults[0]}</td>
                            <td>{parsedResults[1]}</td>
                            <td>{parsedResults[2]}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No results found or incorrect data format.</p>
            )}
        </div>
    );
};

export default ResultTable1;
