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
    I am Ismail ben alla, a software engineering student who is dedicated to acquiring knowledge and
    skills in my field through hard work and perseverance. My passion for software engineering is 
    evident, and I have a particular interest in 3D animation, deep learning, and machine learning. 
    As a good communicator, I am able to explain difficult technical concepts to a variety of audiences. 
    With my creative mindset, 
    I approach software development challenges in novel ways, allowing me to come up with innovative solutions.
    `,
    url: "ben_alla_ismail_cv.pdf"
  }
  const imane = {
    isLTR: true,
    isIsmail: false,
    Reader: `../../../assets/assets/audio/imane-voice.mp3`,
    name: "moutassem imane",
    profession: "computer science engineer",
    description: `
    I'm Mouatassem Imane, a software engineering student who has a love for developing cutting-edge, 
    usable software. I'm dedicated to lifelong learning and utilizing cutting-edge technology to create
    reliable, effective, and scalable software. I have knowledge of creating web applications with ASP.NET
    and React.js technologies. I also have great communication, problem-solving, and teamwork abilities
    as a result of 
    my autonomous and group work on numerous projects over the whole software development life cycle.
    `,
    url: "mouatassem_imane_cv.pdf"
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
          We believe in staying current with industry trends and staying up-to-date with
          the latest technologies and tools. We are committed to continuous learning and growth,
          and I always strive to improve my skills and knowledge.
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
