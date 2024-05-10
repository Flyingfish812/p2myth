import React, { useState, useEffect } from 'react';
import ResultTable1 from '../components/ShopTable1';
import ResultTable2 from '../components/ShopTable2';
import '../css/Result.css';
import * as XLSX from 'xlsx';

const ShipSearch = () => {
    const [playerRank, setPlayerRank] = useState('Bronze');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result1, setResult1] = useState([]);
    const [result2, setResult2] = useState([]);
    const [shopData, setShopData] = useState([]);
    const [nameData, setNameData] = useState([]);
    const [missionData1, setMissionData1] = useState([]);
    const [missionData2, setMissionData2] = useState([]);

    useEffect(() => {
        const readXlsxFile = async () => {
            const response = await fetch('/Shop_table.xlsx');
            const data = await response.arrayBuffer();
            const workbook = XLSX.read(data, { type: 'buffer' });
            const jsonData1 = XLSX.utils.sheet_to_json(workbook.Sheets['Shop Cycle']);
            const jsonData2 = XLSX.utils.sheet_to_json(workbook.Sheets['Gold']);
            const jsonData3 = XLSX.utils.sheet_to_json(workbook.Sheets['Marshal']);
            const jsonData4 = XLSX.utils.sheet_to_json(workbook.Sheets['EN-ZH']);
            setShopData(jsonData1);
            setMissionData1(jsonData2);
            setMissionData2(jsonData3);
            setNameData(jsonData4);
        };
        readXlsxFile();
    }, []);

    const handleSearchOne = () => {
        const currentTime = new Date();
        const targetTime = new Date(Date.UTC(2024, 2, 19)); // Month is 0-indexed
        const offset = -currentTime.getTimezoneOffset() / 60;
        const timeDiff = currentTime - targetTime;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const n = parseInt(input1);
        const additionalHours = 6 * n;
        const totalHours = hoursDiff + additionalHours;

        const exactDays = daysDiff + Math.floor(totalHours / 24)
        const finalDays = exactDays % 100;
        let finalHours = totalHours % 24;
        finalHours -= finalHours % 6; // Adjust to the closest lower multiple of 6

        const dayString = finalDays < 10 ? `0${finalDays}` : `${finalDays}`;
        const hourString = finalHours < 10 ? `0${finalHours}` : `${finalHours}`;

        const searchKey = `Day ${dayString}, ${hourString}00`;
        const resultRow = shopData.find(row => row.Time === searchKey);

        let missionRow;
        let result;
        if (['Bronze', 'Silver'].includes(playerRank)) {
            if(!resultRow) {
                result = 'No Data Found';
            }else{
                result = [exactDays, finalHours, offset];
                result.push([`${resultRow.Ship1}`, `${resultRow.Ship2}`, `${resultRow.Ship3}`])
            }
        } else {
            if(!resultRow) {
                result = 'No Data Found';
            }else{
                if(playerRank === 'Gold'){
                    missionRow = missionData1.find(row => row.Num === finalDays);
                }else{
                    missionRow = missionData2.find(row => row.Num === exactDays % 200);
                }
                result = [exactDays, finalHours, offset];
                result.push([`${resultRow.Ship1S}`, `${resultRow.Ship2S}`, `${resultRow.Ship3S}`])
                result.push(`${missionRow.Theme}`)
                result.push([`${missionRow.Ship1}`, `${missionRow.Ship2}`, `${missionRow.Ship3}`, `${missionRow.Ship4}`, `${missionRow.Ship5}`])
            }
        }

        setResult1(result);
    };

    // Placeholder for search function two
    const handleSearchTwo = () => {
        const searchQuery = input2.toLowerCase();
        const filteredResults = nameData.filter((row) =>
            row.ship_en.toLowerCase().includes(searchQuery)
        );
        let shipName = filteredResults[0].ship_en;
        console.log(shipName);

        // Step 2: Compute the current mission time and find the row in "Shop Cycle"
        const currentTime = new Date();
        const targetTime = new Date(Date.UTC(2024, 2, 19)); // Example: March 19, 2024
        const offset = -currentTime.getTimezoneOffset() / 60;
        const timeDiff = currentTime - targetTime;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const exactDays = daysDiff + Math.floor(hoursDiff / 24)
        const finalDays = exactDays % 100;
        let finalHours = hoursDiff % 24;
        finalHours -= finalHours % 6; // Adjust to the closest lower multiple of 6

        const dayString = finalDays < 10 ? `0${finalDays}` : `${finalDays}`;
        const hourString = finalHours < 10 ? `0${finalHours}` : `${finalHours}`;
        const searchKey = `Day ${dayString}, ${hourString}00`;
        const resultRowIndex = shopData.findIndex(row => row.Time === searchKey);
        console.log(searchKey);

        // Step 3: Find the nearest row with the ship's name
        const shipColumns = ['Bronze', 'Silver'].includes(playerRank) ? ['Ship1', 'Ship2', 'Ship3'] : ['Ship1S', 'Ship2S', 'Ship3S'];
        let nearestTimeDistance = Infinity;

        shopData.forEach((row, index) => {
            shipColumns.forEach(col => {
                if (row[col] === shipName) {
                    let distance = index - resultRowIndex;
                    if (distance < 0) {
                        distance = distance + 400;
                    }
                    if (Math.abs(distance) < Math.abs(nearestTimeDistance)) {
                        nearestTimeDistance = distance;
                    }
                }
            });
        });

        if (nearestTimeDistance === Infinity) {
            console.error('No valid distance found for the ships.');
            return;
        }

        let totalHours = exactDays * 24 + finalHours + 6 * nearestTimeDistance;
        let outputDays = Math.floor(totalHours / 24);
        let outputHours = totalHours % 24;
        let result = [shipName, outputDays, outputHours, offset]

        // Get the mission number
        const missionColumns = ['Ship1', 'Ship2', 'Ship3', 'Ship4', 'Ship5'];
        let nearestMissionDistance = Infinity;
        let shipResult = [];
        let missionNum;
        if(playerRank === 'Gold'){
            let missionRowIndex = missionData1.findIndex(row => row.Num === finalDays);
            missionData1.forEach((row, index) => {
                missionColumns.forEach(col => {
                    if (row[col] === shipName) {
                        let distance = index - missionRowIndex;
                        if (distance < 0) {
                            distance = distance + 100;
                        }
                        if (Math.abs(distance) < Math.abs(nearestMissionDistance)) {
                            nearestMissionDistance = distance;
                        }
                    }
                })
            })
            let resultRow = missionData1.find(row => row.Num === (finalDays + nearestMissionDistance) % 100);
            missionNum = resultRow.Num;
            shipResult.push(resultRow.Ship1, resultRow.Ship2, resultRow.Ship3, resultRow.Ship4, resultRow.Ship5)
            result.push(missionNum, shipResult);
        }else if(playerRank === 'Marshal'){
            let missionRowIndex = missionData2.findIndex(row => row.Num === exactDays % 200);
            missionData2.forEach((row, index) => {
                missionColumns.forEach(col => {
                    if (row[col] === shipName) {
                        let distance = index - missionRowIndex;
                        if (distance < 0) {
                            distance = distance + 200;
                        }
                        if (Math.abs(distance) < Math.abs(nearestMissionDistance)) {
                            nearestMissionDistance = distance;
                        }
                    }
                })
            })
            let resultRow = missionData2.find(row => row.Num === (finalDays + nearestMissionDistance) % 200);
            missionNum = resultRow.Num;
            shipResult.push(resultRow.Ship1, resultRow.Ship2, resultRow.Ship3, resultRow.Ship4, resultRow.Ship5)
            result.push(missionNum, shipResult);
        }
        
        setResult2(result);
    };

    return (
        <div className="centered-container">
            <h1>Phoenix 2 Shop Checker</h1>
            <h3>Designed by Flyingfish812, referred to FBI Light Rock</h3>
            <div className="introduction-block">
                <p>Descriptions:</p>
                <p>Here is a shop tracker. You can use this tracker to find when you can get your next ship.</p>
                <p>You can have two query mode: search by shop or search by ship.</p>
                <p>If you would like to search by shop, you need to enter a number that indicates the refresh times of the shop.
                    For example, you can enter 1 to search for the next shop.
                </p>
                <p>If you would like to search by ships, you need to enter the ship you would like to buy,
                    and it will tell you when you can have the chance to buy it.
                    For example, you can enter 'Phoenix' to search for when Phoenix will appear in the shop.
                </p>
                <p>
                    This page is based on the {' '}
                    <a href="https://gamefaqs.gamespot.com/iphone/193681-phoenix-ii/faqs/76704/appendix-a-shop-cycle" target="_blank">shop cycle page</a>
                    {' '}on the GameFAQs Guide by FBI Light Rock.</p>
            </div>
            <div className='display-block'>
                <p>Important: Your rank will affect your search result. Please set your rank first.</p>
                <hr/>
                <p>You are currently ranked as: {' '}
                    <select value={playerRank} onChange={(e) => setPlayerRank(e.target.value)}>
                        {/* Add options for player ranks here */}
                        <option value='Bronze'>Cadet, Ensign, or Sergeant</option>
                        <option value='Silver'>Ace, Lieutenant, or Captain</option>
                        <option value='Gold'>Colonel, Major, or Commander</option>
                        <option value='Marshal'>Marshal</option>
                    </select>
                </p>
            </div>
            <div className='display-block'>
                <p>(Search by shop)</p>
                <p>
                    You would like to search the shop after several resets:
                    <input
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        placeholder="Enter the number of resets"
                        className="shop-input"
                    />
                    <button onClick={handleSearchOne} className="shop-button">Search it</button>
                </p>
                <hr/>
                <ResultTable1 results={result1} />
            </div>
            
            <div className='display-block'>
                <p>(Search by ships)</p>
                <p>Or, you would like to find when you can buy this ship in the shop:
                    <input
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Enter the ship you want to search"
                        className="shop-input"
                    />
                    <button onClick={handleSearchTwo} className="shop-button">Search it</button>
                </p>
                <hr/>
                <ResultTable2 results={result2} />
            </div>
        </div>
    );
};

export default ShipSearch;
