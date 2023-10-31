import React from 'react'
import Filter from './components/MonthFilter';
import PieChart  from './components/PieChart';
import LineGraph from './components/LineGraph';

import { Grid, Typography, Stack}from '@mui/material'

function App() {

  return (
    <Grid xs={12} mt={4}>
      <Grid container my={4} spacing={2}>
          <Grid item container xs={12} md={6} justifyContent="center"> 
            <Stack spacing={2}>
              <Typography variant="h6" >
                 Total Sales: xxxxxx
              </Typography>

              <Typography variant="h6" >
                 Total Transactions: xxxxxx
              </Typography>

              <Typography variant="h6">
                 Total Customers: xxxxxx
              </Typography>
            </Stack>
          </Grid>

          <Grid item container xs={12} md={6} justifyContent="center" > 
          
            <Filter />

          </Grid>
      </Grid>

      <Grid container  my={4} >
          <Grid item container xs={12} md={6} justifyContent="center"> 
          
            Pie Chart
          
          </Grid>

          <Grid item container xs={12} md={6} justifyContent="center"> 
          
            Line Graph

          </Grid>
      </Grid>

      <Grid container xs={12} justifyContent="center" my={4} >
          Line Graph
      </Grid>

      <Grid container xs={12} justifyContent="center" my={4} >
          Table
      </Grid>
    
    </Grid>
  );
}

export default App;
