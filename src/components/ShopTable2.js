import React from 'react';

const ResultTable2 = ({ results }) => {
    function countElements(results) {
        if (Array.isArray(results) && results.length > 5) {
            const sixthElement = results[5];
    
            if (sixthElement !== undefined && sixthElement !== null) {
                let count = 0;
    
                for (let item of sixthElement) {
                    if (item !== undefined && item !== null && item !== 'undefined') {
                        count++;
                    } else {
                        break;
                    }
                }
                return count;
            }
        }
        return 0;
    }
    const elements = (Array.isArray(results) && results.length > 5) ? results[5] : [];
    const definedCount = countElements(results);
    const elementsString = elements.slice(0, definedCount).map((item) => item).join(', ');
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <div>
                    <p>You are searching for the ship {results[0]}.</p>
                    <p>It will appear at mission #{results[1]+3000}, and the shop set will be renewed at {results[2]+results[3]}:00, GMT+{results[3]}</p>
                    {results.length > 5 ? (
                        <div>
                            <p>Or you can wait for the mission #{results[4]+3000}, its specialist mission will include these ships:</p>
                            {definedCount > 0 ? (elementsString) : ('')}
                        </div>
                    ) : ('')}
                </div>
            ) : (
                <p>No results found or incorrect data format.</p>
            )}
        </div>
    );
};

export default ResultTable2;
