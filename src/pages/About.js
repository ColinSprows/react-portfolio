import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2, backgroundColor: "#f0f7ff", padding:"0px 24px" }}>
      <CardContent >
        <Typography variant="h5" component="div" sx={{textAlign: "center"}}>
          About Me
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <AccountCircleIcon sx={{ fontSize: 100 }}/>
        </Box>
        <Typography variant="body2">
        <br />
        Albert Einstein was a German-born theoretical physicist who is widely considered one of the most influential scientists of the 20th century. He is best known for his theory of relativity and his famous equation E=mc², which describes the relationship between mass and energy.
        <br /><br />
        Einstein was born in Ulm, Germany in 1879. He grew up in a middle-class Jewish family and showed an early interest in mathematics and physics. After completing his schooling, Einstein attended the Swiss Federal Polytechnic in Zurich, where he earned his diploma in mathematics and physics in 1900.
        <br /><br />
        In 1905, Einstein published a series of groundbreaking papers that revolutionized the field of physics. Among his most famous works were his theory of special relativity, which explained the relationship between space and time, and his equation E=mc², which showed that mass and energy were equivalent.
        <br /><br />
        Einstein's work had a profound impact on the scientific community and earned him numerous accolades and awards, including the Nobel Prize in Physics in 1921. He continued to work and publish throughout his life, and became a prominent advocate for world peace and nuclear disarmament in his later years.
        <br /><br />
        Today, Einstein is remembered as one of the greatest scientists of all time, and his work continues to inspire and influence physicists and mathematicians around the world. His legacy serves as a reminder of the power of human intellect and the importance of scientific inquiry in shaping our understanding of the universe.
        </Typography>
      </CardContent>
    </Card>
  );
}