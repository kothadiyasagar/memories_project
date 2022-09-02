import React,{useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import {Form} from './components/Form/Form';
import useStyles from "./styles"

const App =()=>{
    const [currentId, setCurrentId] = useState(0);
    const classes  = useStyles()

    return (
        <>
       <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading}  variant="h2" align="center">Memories</Typography>
            <img className={classes.image}  src="https://cdn-icons-png.flaticon.com/512/3321/3321440.png" alt="memories" height="60px"  />
        </AppBar>
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
             <Form />
            </Grid>
          </Grid>
        </Container>
        </Grow>
       </Container>
        </>
    )

}

export default App