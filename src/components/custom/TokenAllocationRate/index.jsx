import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Button, Modal, List, ListItem, Grid, Collapse, Typography, Divider, Input, IconButton, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import uuid from 'uuid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    width: "100%",
    maxWidth: "846px",
    boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    border: "1px solid #ffffff",
};

const avarta = {
    background: "#EFF2F5",
    borderRadius: "36.5px",
    width: "73px",
    height: "73px",
    padding: 0,
}

const label = {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#11142D",
    padding: "24px",
}

const addMember = {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#446DFF",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    cursor: "pointer",
}

const chose = {
    color: "#A6B0C3",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "19px",
    padding: "16px",
    background: "#EFF2F5",
    borderRadius: "8px",
}

const wrapItem = {
    maxHeight: "380px",
    overflow: "auto",
}

function renderItem({ item, handleInputChange, handleRemoveFruit, index }) {
    const Input = styled('input')({
        display: 'none',
    });

    const numberStyle = {
        color: "#11142D",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
    }

    const deleteButton = {
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer",
    }

    return (

        <TableRow>
            <TableCell component="th" scope="row">
                <Typography sx={numberStyle}>{index}</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
                <FormControl className="form-control">
                    <OutlinedInput
                        id="category"
                        name="category"
                        type="text"
                        placeholder="Tên hạng mục"
                        value={item.category}
                        onChange={handleInputChange}
                    />
                </FormControl>
            </TableCell>
            <TableCell align="right">
                <FormControl className="form-control">
                    <OutlinedInput
                        id="ratio"
                        name="ratio"
                        type="text"
                        placeholder="100%"
                        value={item.ratio}
                        onChange={handleInputChange}
                    />
                </FormControl>
            </TableCell>
            <TableCell align="right">
                <FormControl className="form-control">
                    <OutlinedInput
                        id="price"
                        name="price"
                        type="text"
                        placeholder="$10.000"
                        value={item.price}
                        onChange={handleInputChange}
                    />
                </FormControl>
            </TableCell>
            <TableCell align="right">
                <FormControl className="form-control">
                    <OutlinedInput
                        id="quantily"
                        name="quantily"
                        type="text"
                        placeholder="56.160.000"
                        value={item.quantily}
                        onChange={handleInputChange}
                    />
                </FormControl>
            </TableCell>
            <TableCell align="right">
                <FormControl className="form-control">
                    <OutlinedInput
                        id="vesting"
                        name="vesting"
                        type="text"
                        placeholder="5% unlock at TGE, 90-days cliff, 6% monthly"
                        value={item.vesting}
                        onChange={handleInputChange}
                    />
                </FormControl>
            </TableCell>
            <TableCell sx={{ position: "relative" }} align="right">
                <Box sx={deleteButton} onClick={() => handleRemoveFruit(item.id)}>
                    <img src="/assets/icons/close-circle.svg" alt="close-circle" />
                </Box>
            </TableCell>
        </TableRow>
    );
}

const TokenAllocationRate = (props) => {
    const [items, setItems] = useState([
        { id: uuid(), category: '', ratio: '', price: '', quantily: '', vesting: '' },
        { id: uuid(), category: '', ratio: '', price: '', quantily: '', vesting: '' },
        { id: uuid(), category: '', ratio: '', price: '', quantily: '', vesting: '' },
    ]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
    };

    const handleAddFruit = () => {
        const nextHiddenItem = {
            id: uuid(),
            avarta: "",
            name: "",
            postion: "",
        }
        if (nextHiddenItem) {
            setItems((items) => [
                ...items,
                nextHiddenItem,
            ]);
        }
    };

    const handleRemoveFruit = (id) => {
        setItems((items) =>
            items.filter((item) => item.id !== id)
        )
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setFormValues({
        //     ...formValues,
        //     [name]: value,
        // });
    };

    const addFruitButton = (
        <Box
            sx={addMember}
            variant="contained"
            onClick={handleAddFruit}
        >
            <img src="/assets/icons/add-circle.svg" alt="add-circle" />
            Thêm hạng mục
        </Box>
    );

    const styleHead = {
        background: "#EFF2F5",

        'th': {
            color: "#11142D",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "22px",
        }
    }

    const fontStyle = {
        color: "#11142D",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "22px",
    }

    return (
        <div>
            <Box sx={chose} onClick={handleOpen}>Đội ngũ phát triển</Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={label}>Đội ngũ phát triển</Typography>
                    <Divider />
                    <TableContainer component={Paper} sx={{ padding: "15px 35px", }}>
                        <Table sx={{ minWidth: 650, borderRadius: "10px", overflow: "hidden" }} aria-label="simple table">
                            <TableHead sx={styleHead}>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Hạng mục</TableCell>
                                    <TableCell align="right">Tỉ lệ</TableCell>
                                    <TableCell align="right">Giá bán</TableCell>
                                    <TableCell align="right">Số lượng</TableCell>
                                    <TableCell>Vesting</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item, index) => (
                                    renderItem({ item, handleInputChange, handleRemoveFruit, index })
                                ))}
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <Typography sx={fontStyle}>Tổng cộng</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={fontStyle}>100%</Typography>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow sx={styleHead}>
                                    <TableCell component="th" scope="row" colSpan={3}>
                                        {addFruitButton}
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ padding: "12px 24px", textAlign: "right", background: "#F6F8FA", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}>
                        <Button sx={{ maxWidth: "118px" }} className="button" onClick={handleClose}>Xong</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default TokenAllocationRate;