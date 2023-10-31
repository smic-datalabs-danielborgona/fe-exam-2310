import React from "react"
import ReactEcharts from "echarts-for-react";

import Grid from "@mui/material/Grid"


export default function LineGraph () {
    
    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      

    return (
        <Grid width={'100%'} p={2} boxShadow={3} borderRadius={'10px'} >
            <ReactEcharts option={option} />
        </Grid>
    )
}