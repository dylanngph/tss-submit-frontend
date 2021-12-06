import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Select, MenuItem, Typography } from '@mui/material';

const Information = (props) => {
    return (
        <Box>
            <Typography sx={{ textAlign: "left !important", }} className="tab-title">Tổ chức</Typography>
            <Box>
                <Box sx={{
                    padding: "24px 36px 4px",
                    background: "#EFF2F5",
                    borderRadius: "12px",

                }}>
                    <form>
                        <FormControl className="form-control mb-16">
                            <FormLabel>Tên tổ chức</FormLabel>
                            <Box>
                                <OutlinedInput
                                    id="incorporationName"
                                    name="incorporationName"
                                    type="text"
                                    placeholder="Tên tổ chức"
                                />
                                <img src="/assets/icons/flag.svg" />
                            </Box>
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Information