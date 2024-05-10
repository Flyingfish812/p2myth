import React from 'react';

const ResultTable1 = ({ results }) => {
    // const parsedResults = typeof results === 'string' ? results.split(', ') : [];
    function countElements(results) {
        // 检查results是否为数组且长度至少为6
        if (Array.isArray(results) && results.length > 5) {
            // 获取第6个元素
            const sixthElement = results[5];
    
            // 检查第6个元素是否存在且不是undefined或null
            if (sixthElement !== undefined && sixthElement !== null) {
                // 初始化计数器
                let count = 0;
    
                // 遍历第6个元素的数组，计算连续被定义的元素个数
                for (let item of sixthElement) {
                    if (item !== undefined && item !== null && item !== 'undefined') {
                        count++;  // 元素被定义，增加计数器
                    } else {
                        break;  // 遇到未定义元素，终止循环
                    }
                }
    
                // 返回被定义的元素个数
                return count;
            }
        }
        return 0; // 如果任何检查失败，则返回0
    }
    const elements = (Array.isArray(results) && results.length > 5) ? results[5] : [];
    const definedCount = countElements(results);
    const elementsString = elements.slice(0, definedCount).map((item) => item).join(', ');
    
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <div>
                    <table style={{ margin: 'auto', display: 'inline-block' }}>
                        <thead>
                            <tr>
                                <th>Ship1</th>
                                <th>Ship2</th>
                                <th>Ship3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{results[3][0]}</td>
                                <td>{results[3][1]}</td>
                                <td>{results[3][2]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>You are searching for mission #{results[0]+3000}, this shop set will be renewed in {results[1]+results[2]}:00 GMT+{results[2]}</p>
                </div>
            ) : (
                <p>No results found or incorrect data format.</p>
            )}
            {results.length == 6 ? (
            <div>
                <p>As a reference, the specialist mission #{results[0]+3000} will be {results[4]}, it will include these ships:</p>
                {definedCount > 0 ? (elementsString) : ('')}
            </div>
            ) : (<p></p>)}
        </div>
    );
};

export default ResultTable1;
