import React, { useState } from 'react';
import './Table.css';
import OutletData from './OutletData'; // Import your data array
import UserDashboard from '../Dashboard/UserDashboard'; // Import UserDashboard component

function Table() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedParty, setSelectedParty] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePartySelection = (partyCode) => {
        setSelectedParty(partyCode);
    };

    const filteredData = OutletData.filter((data) => {
        return (
            (data.partyCode && data.partyCode.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (data.ownerName && data.ownerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (data.areaName && data.areaName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (data.ledgerName && data.ledgerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (data.mobileNumber && data.mobileNumber.includes(searchTerm))
        );
    });

    return (
        <div className="table-home">
            <div className="heading">
                <h1 className="H1">Outlet-search</h1>
            </div>
            <div className="main-div">
                <div className="searchbar">
                    <input
                        className="searchinput"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="search" type="submit">
                        Search
                    </button>
                </div>
                <table className="table">
                    <thead>
                        <tr className="headers">
                            <th>Party Code</th>
                            <th>Owner Name</th>
                            <th>Ledger Name</th>
                            <th>Area</th>
                            <th>Mobile no.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? 'data-even' : 'data-odd'}
                            >
                                <td>
                                    {selectedParty !== data.partyCode ? (
                                        <input
                                            type="radio"
                                            onClick={() => handlePartySelection(data.partyCode)}
                                        />
                                    ) : null}
                                    {data.partyCode}
                                </td>
                                <td>{data.ownerName}</td>
                                <td>{data.ledgerName}</td>
                                <td>{data.areaName}</td>
                                <td>{data.mobileNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedParty && <UserDashboard selectedParty={selectedParty} />}
        </div>
    );
}

export default Table;
