import Singlecart from "./Singlechart"
import Container from '@material-ui/core/Container';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
export default function Fullchart({cardDataArray}) {
    return (
      <React.Fragment>
        <CssBaseline />
        
        <Container style= {{backgroundColor:"white"}} >
        <Grid container justify="center" spacing={10}>
        {cardDataArray.map((data,index)=>
        <Grid key={index} item>
        <Singlecart img={`https://robohash.org/${index}?200x200`} name={data.name} email={data.email} key={index}/>
        </Grid>
        )}
         </Grid>
        </Container>
        
      </React.Fragment>
    );
  }
  