import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Button, Modal, List, ListItem, Grid, Collapse, Typography, Divider, Input, IconButton, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
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
    borderRadius: "8px",
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

function renderItem({ item, handleInputChange, handleRemoveFruit }) {
    const Input = styled('input')({
        display: 'none',
    });
    
    const gridStyle = {
        width: "100%",
        margin: 0,
        borderBottom: "1px solid #EFF2F5",
    }

    const deleteButton = {
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer",
    }

    return (
        <ListItem>
            <Grid sx={gridStyle} container spacing={2}>
                <Grid item xs={1.5}>
                    <label htmlFor="icon-button-file">
                        <Input accept="images/*" id="icon-button-file" type="file" />
                        <IconButton sx={avarta} aria-label="upload picture" component="span">
                            <img src="/assets/icons/people.svg" alt="people" />
                        </IconButton>
                    </label>
                </Grid>
                <Grid item xs={4.5}>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tên đối tác</FormLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Tên đối tác"
                            value={item.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4.5}>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Website</FormLabel>
                        <OutlinedInput
                            id="position"
                            name="position"
                            type="text"
                            placeholder="http://"
                            value={item.position}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid sx={{position: "relative"}} item xs={1.5}>
                    <Box sx={deleteButton} onClick={() => handleRemoveFruit(item.id)}>
                        <img src="/assets/icons/close-circle.svg" alt="close-circle" />
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    );
}

const DevelopmentPartner = (props) => {
    const [items, setItems] = useState([
        { id: uuid(), avarta: '', name: '', position: '' },
        { id: uuid(), avarta: '', name: '', position: '' },
        { id: uuid(), avarta: '', name: '', position: '' },
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
            Thêm  thành viên
        </Box>
    );

    return (
        <div>
            <Box sx={chose} onClick={handleOpen}>Đối tác phát triển</Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={label}>Đối tác phát triển</Typography>
                    <Divider />
                    <List sx={wrapItem}>
                        <TransitionGroup>
                            {items.map((item, index) => (
                                <Collapse>
                                    {renderItem({ item, handleInputChange, handleRemoveFruit })}
                                </Collapse>
                            ))}
                        </TransitionGroup>
                    </List>
                    <Box sx={{padding: "10px 26px"}}>
                        {addFruitButton}
                    </Box>
                    <Box sx={{padding: "12px 24px", textAlign: "right", background: "#F6F8FA", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px"}}>
                        <Button sx={{maxWidth: "118px"}} className="button" onClick={handleClose}>Xong</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default DevelopmentPartner;