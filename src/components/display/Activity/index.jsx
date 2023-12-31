import React, { useState, useEffect } from 'react';
import { Box, TableRow, TableHead, Table, TableContainer, Paper, TableBody, TableCell, TablePagination } from '@mui/material';
import axios from 'axios';
import useToken from 'components/hook/useToken';
import moment from "moment";

function Activity(props) {
    const { children, value, index, ...other } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRow] = React.useState([]);
    const { token, setToken } = useToken();

    const columns = [
        { id: 'name', label: 'STT', minWidth: 70 },
        { id: 'activity', label: 'Hoạt động', minWidth: 170 },
        {
            id: 'time',
            label: 'Thời gian',
            minWidth: 100,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'link',
            label: '',
            minWidth: 50,
        },
    ];

    function createData(index, name, time, link) {
        time = moment(time).format('hh:mm DD/MM/YYYY');
        return { index, name, time, link };
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const thStyle = {
        color: "#11142D",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        paddingTop: "12px",
        paddingBottom: "12px",
    }

    const tdStyle = {
        color: "#58667E",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        paddingTop: "20px",
        paddingBottom: "20px",
    }

    useEffect(() => {
        initData()
    }, []);

    const initData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL_API}/notification/user`, { headers: { "Authorization": `Bearer ${token}` } });
            if (response.data) {
                setRow([]);
                const data = response.data.data;
                data?.map((item, index) => {
                    setRow(data => [...data, createData(index + 1, item?.title, item?.updatedAt, item?.link)])
                })
            }
        } catch (error) {}
    }

    return (
        <Box hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell sx={thStyle}
                                        key={column.id}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={rows[index]['index'].toString()}>
                                            <TableCell sx={tdStyle}>
                                                {rows[index]['index']}
                                            </TableCell>
                                            <TableCell sx={tdStyle}>
                                                {rows[index]['name']}
                                            </TableCell>
                                            <TableCell sx={tdStyle}>
                                                {rows[index]['time']}
                                            </TableCell>
                                            <TableCell sx={tdStyle}>
                                                <a href={rows[index]['link']}>Chi tiết</a>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Đang hiển thị"
                />
            </Paper>
        </Box>
    );
}

export default Activity;