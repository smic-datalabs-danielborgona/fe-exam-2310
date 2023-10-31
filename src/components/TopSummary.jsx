import React from 'react'
import {Grid, Stack, Typography} from '@mui/material'

import { useTotalSales, useTotalTransactions,useTotalCustomers } from '../api/ApiHooks';



export default function TopSummary({params}){

   const { data: salesData} = useTotalSales({params});

   const {data: transacData} = useTotalTransactions({params})

   const {data: customerData} = useTotalCustomers({params})

      
    return (
        <Stack direction={'row'} spacing={5} px={1}>
              <Typography variant="h6" >
                 Total Sales: {salesData ? salesData[0].total_sales : 0}
              </Typography>

              <Typography variant="h6" >
                 Total Transactions: {transacData ? transacData[0].total_transactions : 0}
              </Typography>

              <Typography variant="h6">
                 Total Customers: {customerData ? customerData[0].unique_customers : 0}
              </Typography>
        </Stack>
    );
}