import React from 'react';
import OutletData from '../Table/OutletData'; // Import your data array
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './style.css';

function UserDashboard() {
  // Retrieve the partyCode from the route parameters
  const { partyCode } = useParams();

  // Function to find party details by party code
  const findPartyDetails = (partyCode) => {
    return OutletData.find((data) => data.partyCode === partyCode);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const partyDetails = findPartyDetails(partyCode);

  return (
    <div className="user-dashboard">
      
      <div className="outlet-info">
        {partyDetails ? (
          <div className='rest'>
            
             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item xs={6}>
          <Item><div className="text-info" style={{textSizeAdjust:"50"}}>
              <h2>Party Code: {partyDetails.partyCode}</h2>
              <p>Owner Name: {partyDetails.ownerName}</p>
              <p>Ledger Name: {partyDetails.ledgerName}</p>
              <p>Area: {partyDetails.areaName}</p>
              <p>Mobile Number: {partyDetails.mobileNumber}</p>
            </div></Item>
        </Grid>
        <Grid item xs={6}>
        <div className="outlet-image">
              <img src={partyDetails.imageUrl} alt="Outlet pic" />
            </div>
        </Grid>
      
      </Grid>
           
          </div>
        ) : (
          <p>No party selected</p>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
