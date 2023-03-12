import React from 'react'
import BGI from "./astronaut.png";
import { Button, ButtonGroup, Grid, IconButton } from '@material-ui/core';
import "./styles.css"
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const navigate = useNavigate();
    return <>
        <Grid container md={12}  >
            <Grid item md={5} sm={12} style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                 <img src={BGI}  style={{height:"60vh", width:"60%"}} alt="" />
            </Grid>
            <Grid item md={7} sm={12} className="intro_home_text">
                <h1>welcome to antariksh</h1>
                <p>Antariksh is NIT Kurukshetra's official astronomy club that aims to promote the study and appreciation of astronomy and space science through various activities and events. Whether you're a beginner or an expert in astronomy, the club provides a welcoming and inclusive community for all students to explore and learn about the wonders of the cosmos.</p>
                <div className="connect">
                    <Button className='joinUsButton' onClick={(e) => { e.preventDefault(); navigate("/join") }} >Join Us</Button>
                    <IconButton style={{ color: "white" }}> <a href="https://www.instagram.com/antariksh_nitkkr/"> <img style={{ width: "30px" }} src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /> </a> </IconButton>
                    <IconButton style={{ color: "white" }}> <a href=""> <img style={{ width: "30px" }} src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png" alt="" /></a> </IconButton>
                </div>
            </Grid>
        </Grid>
    </>
}

export default Intro