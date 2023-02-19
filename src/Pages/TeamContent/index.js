import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import TeamLogo from '../../Components/Logos/TeamLogo';
import TeamCard from './components/TeamCard';

export const TeamContent = () => {

  const ismail = {
    isLTR: false,
    isIsmail: true,
    name: "ben alla ismail",
    profession: "computer science engineer",
    description: `
    I'm a Web Developer, I love to create beautiful and functional websites. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
    `,
    url :"ben_alla_ismail_cv.pdf"
  }
  const imane = {
    isLTR: true,
    isIsmail: false,
    name: "moutassem imane",
    profession: "computer science engineer",
    description: `
    Hello, I'm Mouatassem imane, a software engineering student passionate about building innovative and user-friendly software solutions. 
    As a software engineer, I'm constantly striving to learn and apply new technologies to create robust, efficient,
     and scalable software solutions. I'm experienced in programming languages such as Java, C++,C# and JavaScript, 
     and have hands-on experience in building web applications using frameworks like React.js and ASP.NET.
    In addition to my technical skills, I possess excellent communication, problem-solving, and teamwork skills. 
    I've worked on various projects both independently and as part of a team, and have experience in all stages of 
    the software development life cycle.
    `,
    url : "Mouatassem Imane.pdf"
  }

  return (
    <GlowBubble>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TeamLogo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Our Team</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '1.3rem', border: "1px solid #000", borderRadius: '1rem', margin: '1rem' }}>
          Here are some of our projects that we have completed
          using different technologies and programming languages.
        </Typography>
      </Box>


      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <TeamCard data={ismail} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <TeamCard data={imane} />
        </Grid>

      </Grid>
    </GlowBubble>
  )
};
