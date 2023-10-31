import React from "react"
import ReactEcharts from "echarts-for-react";
import {Grid, Card} from "@mui/material";

export default function PieChart () {

   const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '60%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }   
          }
        ]
      };

    return (
      <Grid width={'100%'} p={2} boxShadow={3} borderRadius={'10px'}>
        <ReactEcharts option={option} />
      </Grid>
    )
}