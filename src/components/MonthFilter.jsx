import React from "react"
import { Autocomplete, TextField } from "@mui/material"


const monthsAndYearOption =[
    { label: "January", value: 1},
    { label: "February", value: 2, },
    { label: "March" , value: 3, },
    { label: "April", value: 4,  },
    { label: "May", value: 5, },
    { label: "June", value: 6, },
    { label: "July", value: 7, },
    { label: "August", value: 8,  },
    { label: "September",value: 9, },
    { label: "October", value: 10, },
    { label: "November", value: 11,  },
    { label: "December" , value: 12, }
]


export default function Filter () {

    return (
        //Still need to change component use date picker 
        <Autocomplete
            size='small'
            disablePortal
            options={monthsAndYearOption}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Month and Year" />}
        />
    )
}