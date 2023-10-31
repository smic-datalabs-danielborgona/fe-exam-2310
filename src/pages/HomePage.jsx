import React , {useState}from 'react'
import Filter from '../components/MonthFilter';
import PieChart  from '../components/PieChart';
import LineGraph from '../components/LineGraph';
import Table from '../components/PayoutTable';

import { Grid}from '@mui/material'

import { useTotalSales } from '../api/ApiHooks';
import TopSummary from '../components/TopSummary';
import PayoutTable from '../components/PayoutTable';

export default function HomePage() {

  const [filters, setFilters] = useState({
    month: null,
    year: null
})

const params = {
    month: filters?.month,
    year: filters?.year,
}

//const { data, isLoading, error } = useTotalSales(params);

  return (
    <Grid mt={4} >
      <Grid container  spacing={2}>
          <Grid item container xs={12} md={6} justifyContent="center"> 
            <TopSummary params={params}/>
          </Grid>

          <Grid item container xs={12} md={6} justifyContent="center" > 
            <Filter />
          </Grid>
      </Grid>

      <Grid container  spacing={2} p={2}>
          <Grid item container xs={12} md={6} justifyContent="center" > 
            <PieChart />
          </Grid>

          <Grid item container xs={12} md={6} justifyContent="center"> 
            <LineGraph />
          </Grid>
      </Grid>

      <Grid container xs={12} p={2} justifyContent="center"  >
            <LineGraph />
      </Grid>

      <Grid container xs={12} justifyContent="center" my={4} >
          <PayoutTable />
      </Grid>
    
    </Grid>
  );
}
