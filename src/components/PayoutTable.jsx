import React , {useState}from 'react';
import { Grid, TextField } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useArtistData } from '../api/ApiHooks';


export default function PayoutTable(){

    const {data} = useArtistData();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchText, setSearchText] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredData = data
    ? data.filter((artist) =>
        artist.Name.toLowerCase().includes(searchText.toLowerCase())
    )
    : [];

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    return(
        <Grid container p={2}>
            <Grid container justifyContent='end'>
                <TextField size='small' 
                label='Search by Artist Name'
                value={searchText}
                onChange={handleSearch}
                
                />
            </Grid>

            <Grid container mt={2} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Artist Name</TableCell>
                                <TableCell>Total Payout</TableCell>
                                <TableCell>Total Sales</TableCell>
                                <TableCell>Payout Last Month</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                             {filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((artist) => (
                                <TableRow key={artist.ArtistId}>
                                    <TableCell>{artist.Name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]} 
                        component="div"
                        count={data?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Grid>
        </Grid>
    );
}