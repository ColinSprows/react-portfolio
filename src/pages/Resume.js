import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography, Card } from '@mui/material';

const Resume = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",}}>
      <Card sx={{ minWidth: 275, marginTop: 2, backgroundColor: "#f0f7ff", padding:"0px 24px" }}>
        <Typography sx={{fontSize:"1.5em", fontWeight:"800", marginTop: "12px"}}>Resume</Typography>
        <Typography sx={{marginBottom: "12px"}}>Download my <span>resume</span></Typography>
        <Box sx={{ width: '60vw', maxWidth: 600 }}>
        <Divider />
          <List subheader={<ListSubheader sx={{background: "transparent"}}>Front-End Proficiences</ListSubheader>}>
              <ListItemText primary="HTML" />
              <ListItemText primary="CSS" />
              <ListItemText primary="JavaScript" />
              <ListItemText primary="JQuery" />
              <ListItemText primary="responsive design" />
              <ListItemText primary="React" />
              <ListItemText primary="Bootstrap" />
          </List>
        <Divider />
          <List subheader={<ListSubheader sx={{background: "transparent"}}>Back-End Proficiences</ListSubheader>}>
              <ListItemText primary="APIs" />
              <ListItemText primary="Node" />
              <ListItemText primary="Express" />
              <ListItemText primary="MySQL" />
              <ListItemText primary="Sequelize" />
          </List>
      </Box>
    </Card>
      
    </div>
  )
}

export default Resume