import React, { useState } from "react";
import { Box, TableRow, TableHead, Table, TableContainer, Paper, TableBody, TableCell, TablePagination } from '@mui/material';

function Activity (props) {
    const { children, value, index, ...other } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const columns = [
        { id: 'name', label: '#', minWidth: 70 },
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

      function createData(name, time, link) {
        return { name, time, link };
      }

      const rows = [
        createData('Hồ sơ đã được gửi', '17:14 21/11/2021', '/abc/abc'),
        createData('Hồ sơ đã được duyệt', '17:14 21/11/2021', '/abc/abc'),
        createData('Yêu cầu chỉnh sửa đã được duyệt', '17:14 21/11/2021', '/abc/abc'),
        createData('Yêu cầu chỉnh sửa đã được gửi', '17:14 21/11/2021', '/abc/abc'),
        createData('Đơn xin con dấu đã được duyệt', '17:14 21/11/2021', '/abc/abc'),
        createData('Đơn xin con dấu đang được xử lý', '17:14 21/11/2021', '/abc/abc'),
      ];

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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                             <TableCell sx={tdStyle}>
                                                {index + 1}
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
                />
            </Paper>
        </Box>
    );
}

export default Activity;