import React from 'react';
import OutletData from '../Table/OutletData'; // Import your data array
import { useParams } from 'react-router-dom';

function UserDashboard() {
  // Retrieve the partyCode from the route parameters
  const { partyCode } = useParams();

  // Function to find party details by party code
  const findPartyDetails = (partyCode) => {
    return OutletData.find((data) => data.partyCode === partyCode);
  };

  const partyDetails = findPartyDetails(partyCode);

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      {partyDetails ? (
        <div>
          <h2>Party Code: {partyDetails.partyCode}</h2>
          <p>Owner Name: {partyDetails.ownerName}</p>
          <p>Ledger Name: {partyDetails.ledgerName}</p>
          <p>Area: {partyDetails.areaName}</p>
          <p>Mobile Number: {partyDetails.mobileNumber}</p>
        </div>
      ) : (
        <p>No party selected</p>
      )}
    </div>
  );
}

export default UserDashboard;
