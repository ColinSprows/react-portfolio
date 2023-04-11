import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ 
        position: "fixed",
        bottom: "0px",
        width: "100%",
        display: "flex",
        color: "white",
        height: "15%",
        float: "right",
        alignItems: "center",
        justifyContent: "center",
        }}
    >
      <BottomNavigation>
        <BottomNavigationAction icon={<GitHubIcon />} />
        <BottomNavigationAction icon={<LinkedInIcon />} />
      </BottomNavigation>
    </Box>
  );
}