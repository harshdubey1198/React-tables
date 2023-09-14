import React, { useState, useEffect } from 'react';
import './Table.css';
import OutletData from './OutletData'; // Import your data array
import { Link } from 'react-router-dom';
// import { AiFillHome, } from 'react-icons/ai';
import { FcBusinessman, FcShop,FcPhoneAndroid,FcHome ,FcList} from 'react-icons/fc';

function Table() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedData, setSortedData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle the sorting order if the same column is clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new sorting column and default to ascending order
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  useEffect(() => {
    // Create a copy of the original data to avoid modifying it directly
    const dataCopy = [...OutletData];

    // Sort the data based on the selected column and order
    dataCopy.sort((a, b) => {
      const aValue = a[sortColumn] || '';
      const bValue = b[sortColumn] || '';

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    // Filter the sorted data based on the search term
    const filteredData = dataCopy.filter((data) => {
      return (
        (data.partyCode &&
          data.partyCode.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.ownerName &&
          data.ownerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.areaName &&
          data.areaName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.ledgerName &&
          data.ledgerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.mobileNumber && data.mobileNumber.includes(searchTerm))
      );
    });

    // Update the sorted data state
    setSortedData(filteredData);
  }, [searchTerm, sortColumn, sortOrder]);

  return (
    <div className="table-home">
      <div className="heading">
        <h1 className="H1">Outlet-search</h1>
      </div>
      <div className="main-div">
        <div className="searchbar">
         
          <input
            type="text"
            placeholder="Search for party"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn-x" type="submit">
            <Link
              to={`/dashboard/${sortedData[0] ? sortedData[0].partyCode : ''
                }`}
              className="party-code-link"
            >
              Search
            </Link>
          </button>
          <button
            className="sorting-button"
            onClick={() =>
              setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
            }
          >
            {sortOrder === 'asc' ? 'Sort Desc' : 'Sort Asc'}
          </button>
        </div>

        <div className="table-container" style={{ maxHeight: '450px', overflowY: 'auto' }}>
          <table className="table">
            <thead>
              <tr className="headers">
                <th
                  style={{ color: 'blueviolet', cursor: 'pointer' }}
                  onClick={() => handleSort('partyCode')}
                ><FcList style={{marginTop:"3px"}} />
                  Party Code
                </th>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('ownerName')}
                >
                  <FcBusinessman /> Owner Name
                </th>
                <th
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('ledgerName')}
                >
                  <FcShop /> Ledger Name
                </th>
                <th style={{ cursor: 'pointer' }}>
                  <FcHome style={{ color: 'blueviolet' }} /> Area
                </th>
                <th
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSort('mobileNumber')}
                >
                  <FcPhoneAndroid />Mobile no.
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {sortedData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'data-even' : 'data-odd'}
                >
                  <td className="link">
                    <button className="btn-x">
                      <Link
                        to={`/dashboard/${data.partyCode}`}
                        className="party-code-link"
                      >
                        {data.partyCode}
                      </Link>
                    </button>
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
      </div>
    </div>
  );
}

export default Table;
