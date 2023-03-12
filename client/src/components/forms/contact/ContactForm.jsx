import React, { useState } from 'react';
import { Paper, TextField, FormLabel,Typography, Grid, Button } from '@material-ui/core';
import { style } from "./styles";
import { contactForm } from '../../../api';
import {useNavigate} from "react-router-dom";
const defaultData={
    name: "",
    email: "",
    phone: '',
    query: "",
}


const ContactForm = () => {
    const navigate=useNavigate();
    const [styles, setStyles] = useState(style);
    const [loading,setLoading]=useState(false);
    const [submitted,setSubmitted]=useState(true);
    const [formData,setFormdata]=useState(defaultData)
    const handleSubmit=async(e)=>{
        setLoading(true);
        e.preventDefault();
        const response=await contactForm(formData);
        setLoading(false);
        setSubmitted(true);
        setFormdata(defaultData);
    }
  return (
    <>
          <Grid md={12}  style={styles.grid}>
            <Grid item md={4}  sm={6} xs={12}>
                <Paper style={styles.paper} elevation={6}>
                    <form style={styles.formControl}  onSubmit={handleSubmit} >
                        <FormLabel style={styles.formLabel}>Contact Us</FormLabel>
                        <TextField  InputLabelProps={{style: { color: 'rgba(255,255,255,0.7)' },}} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Full Name" variant='standard' fullWidth value={formData.name} onChange={e=>{e.preventDefault(); setFormdata({...formData,name:e.target.value})}} />
                        <TextField InputLabelProps={{style: { color: 'rgba(255,255,255,0.7)' },}} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Email" variant='standard' fullWidth value={formData.email} onChange={e=>{e.preventDefault(); setFormdata({...formData,email:e.target.value})}} />
                        <TextField InputLabelProps={{style: { color: 'rgba(255,255,255,0.7)' },}} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Phone" variant='standard' fullWidth value={formData.phone} onChange={e=>{e.preventDefault(); setFormdata({...formData,phone:e.target.value})}} />
                        <TextField
                          required
                           InputLabelProps={{style: { color: 'rgba(255,255,255,0.7)' },}}
                           inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                            style={{ textAlign: 'left' }}
                            label="Query"
                            multiline

                            variant='standard'
                            value={formData.query} 
                            onChange={e=>{e.preventDefault(); setFormdata({...formData,query:e.target.value})}}
                            rows={4}
                        />
                        <Button type='submit' variant={loading?"outlined":"contained"} color='primary' >Submit</Button>
                        {
                            submitted ?
                                <Typography variant='body2' style={{ color: "rgba(255,255,255,0.8)" }}>We have recorded your response. We will reach you soon.
                                    <Button variant='outlined' style={{ float: "right" }} onClick={(e) => {e.preventDefault(); navigate("/"); setSubmitted(false)  }} style={{ color: "rgba(255,255,255,0.7)", }}   >Back</Button>
                                </Typography>
                                : 
                                ""
                        }
                    </form>
                </Paper>
            </Grid>
        </Grid>
    </>
  )
}

export default ContactForm