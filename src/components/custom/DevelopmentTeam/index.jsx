import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, Button, Modal, List, ListItem, Grid, Collapse, Typography, Divider, Input, IconButton } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

const FRUITS = [
    {
        avarta: "",
        name: "",
        position: "",
    }
];

function renderItem({ item, handleRemoveFruit }) {
    return (
        <ListItem>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <label htmlFor="icon-button-file">
                        <Input accept="images/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <img src="/assets/icons/user-cirlce-add.png" alt="user-cirlce-add" />
                        </IconButton>
                    </label>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </ListItem>
    );
}

const DevelopmentTeam = (props) => {
    const defaultValues = {
        appType: 1,
        country: ''
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
    };

    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveFruit = (item) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

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

    const Input = styled('input')({
        display: 'none',
    });

    const mainTitle = {
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "29px",
        color: "#11142D",
    }

    const label = {
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#11142D",
        padding: "24px",
    }

    const button = {
        background: "#446DFF",
        borderRadius: "8px",
        maxWidth: "212px",
        padding: "12px",
        width: "100%",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        margin: "auto",
        display: "block",
    }

    const addFruitButton = (
        <Button
            variant="contained"
            onClick={handleAddFruit}
        >
            Add fruit to basket
        </Button>
    );

    return (
        <div>
            <Button className="button" onClick={handleOpen}>Đội ngũ phát triển</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={label}>Đội ngũ phát triển</Typography>
                    <Divider />
                    <List>
                        <TransitionGroup>
                            {/* {fruitsInBasket.map((item) => ( */}
                            <Collapse>
                                {/* {renderItem({ item, handleRemoveFruit })} */}
                                <ListItem>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <label htmlFor="icon-button-file">
                                                <Input accept="images/*" id="icon-button-file" type="file" />
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <img src="/assets/icons/user-cirlce-add.png" alt="user-cirlce-add" />
                                                </IconButton>
                                            </label>
                                        </Grid>
                                        <Grid item xs={4}>

                                        </Grid>
                                        <Grid item xs={4}>

                                        </Grid>
                                        <Grid item xs={2}>

                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </Collapse>
                            {/* ))} */}
                        </TransitionGroup>
                    </List>
                    {addFruitButton}
                </Box>
            </Modal>
        </div>
    )
}

export default DevelopmentTeam;