import React, { useState } from 'react';
import { Paper, TextField, FormControl, FormLabel, Grid, MenuItem, Button, Typography } from '@material-ui/core';
import { style } from "./styles";
import { useNavigate } from 'react-router-dom';
import { Brand } from '../../partials/header/navbar/parts';
import { joiningForm } from '../../../api';

const defaultData = {
    name: "",
    email: "",
    phone: '',
    branch: "",
    year: "",
    purpose: "",
}
const JoinForm = () => {
    const navigate = useNavigate();
    const [styles, setStyles] = useState(style);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormdata] = useState(defaultData)
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const data = await joiningForm(formData);
        console.log({ data });
        setFormdata(defaultData);
        setLoading(false);
        setSubmitted(true);
    }
    return <>
        <Grid md={12} style={styles.grid}>
            <Grid item md={4} sm={6} xs={12}>
                <Paper style={styles.paper} elevation={6}>
                    <form style={styles.formControl} onSubmit={handleSubmit} >
                        <FormLabel style={styles.formLabel}>JOIN US</FormLabel>
                        <TextField InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Full Name" variant='standard' fullWidth value={formData.name} onChange={e => { e.preventDefault(); setFormdata({ ...formData, name: e.target.value }) }} />
                        <TextField InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Email" variant='standard' fullWidth value={formData.email} onChange={e => { e.preventDefault(); setFormdata({ ...formData, email: e.target.value }) }} />
                        <TextField InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }} inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }} required label="Phone" variant='standard' fullWidth value={formData.phone} onChange={e => { e.preventDefault(); setFormdata({ ...formData, phone: e.target.value }) }} />
                        <TextField required
                            label="Select Branch "
                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }}
                            inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                            select
                            variant='standard'
                            fullWidth
                            value={formData.branch}
                            onChange={e => { e.preventDefault(); setFormdata({ ...formData, branch: e.target.value }) }}
                        >
                            <MenuItem value="pie">PIE</MenuItem>
                            <MenuItem value="cse">CSE</MenuItem>
                            <MenuItem value="it">IT</MenuItem>
                            <MenuItem value="ece">ECE</MenuItem>
                            <MenuItem value="ee">EE</MenuItem>
                            <MenuItem value="me">ME</MenuItem>
                            <MenuItem value="ce">CE</MenuItem>
                        </TextField>
                        <TextField
                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }}
                            inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                            required label="Select Year "
                            select
                            variant='standard'
                            fullWidth
                            value={formData.year}
                            onChange={e => { e.preventDefault(); setFormdata({ ...formData, year: e.target.value }) }}
                        >
                            <MenuItem value="1">1st</MenuItem>
                            <MenuItem value="2">2nd</MenuItem>
                            <MenuItem value="3">3rd</MenuItem>
                            <MenuItem value="4">4th</MenuItem>
                        </TextField>
                        <TextField
                            required
                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' }, }}
                            inputProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                            style={{ textAlign: 'left' }}
                            label="Why you want to join Antariksh"
                            multiline
                            variant='standard'
                            value={formData.purpose}
                            onChange={e => { e.preventDefault(); setFormdata({ ...formData, purpose: e.target.value }) }}
                            rows={4}
                        />
                        <Button type='submit' variant={loading ? "outlined" : "contained"} color='primary' >Submit</Button>
                        {
                            submitted ?
                                <Typography variant='body2' style={{ color: "rgba(255,255,255,0.8)" }}>We have recorded your request. We will reach you soon.
                                    <Button variant='outlined' style={{ float: "right" }} onClick={() => { navigate("/") }} style={{ color: "rgba(255,255,255,0.7)" }}>Back</Button>
                                </Typography>
                                :
                                ""
                        }
                    </form>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default JoinForm