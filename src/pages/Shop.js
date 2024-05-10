import React, { useState, useEffect } from 'react';
import ResultTable1 from '../components/ShopTable1';
import '../css/Result.css';
import * as XLSX from 'xlsx';

const ShipSearch = () => {
    const [playerRank, setPlayerRank] = useState('Bronze');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result1, setResult1] = useState([]);
    const [result2, setResult2] = useState([]);
    const [shopData, setShopData] = useState([]);
    const [missionData1, setMissionData1] = useState([]);
    const [missionData2, setMissionData2] = useState([]);

    useEffect(() => {
        const readXlsxFile = async () => {
            const response = await fetch('/Shop_table.xlsx');
            const data = await response.arrayBuffer();
            const workbook = XLSX.read(data, { type: 'buffer' });
            const worksheet = workbook.Sheets['Shop Cycle'];
            const missionSheet1 = workbook.Sheets['Gold'];
            const missionSheet2 = workbook.Sheets['Marshal'];
            const jsonData1 = XLSX.utils.sheet_to_json(worksheet);
            const jsonData2 = XLSX.utils.sheet_to_json(missionSheet1);
            const jsonData3 = XLSX.utils.sheet_to_json(missionSheet2);
            setShopData(jsonData1);
            setMissionData1(jsonData2);
            setMissionData2(jsonData3);
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
        console.log('Search two with:', input2);
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
                    and it will tell you when you can have the chance to buy it.</p>
                <p>
                    This page is based on the {' '}
                    <a href="https://gamefaqs.gamespot.com/iphone/193681-phoenix-ii/faqs/76704/appendix-a-shop-cycle" target="_blank">shop cycle page</a>
                    {' '}on the GameFAQs Guide by FBI Light Rock.</p>
            </div>
            <div>
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
                <p>
                    You would like to search the shop after {' '}
                    <input value={input1} onChange={(e) => setInput1(e.target.value)} />
                    {' '} rounds. {' '}
                    <button onClick={handleSearchOne}>Search it</button>
                </p>
                <ResultTable1 results={result1} />
            </div>
            
            <div className='display-block'>
                <p>(Still Under Construction)</p>
                <p>
                    Or, you would like to find when you can buy {' '}
                    <input value={input2} onChange={(e) => setInput2(e.target.value)} />
                    {' '} in the shop. {' '}
                    <button onClick={handleSearchTwo}>Search it</button>
                </p>
            </div>
        </div>
    );
};

export default ShipSearch;
