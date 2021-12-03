import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Select, MenuItem, Typography } from '@mui/material';

const Information = (props) => {
    return (
        <Box>
            <Typography>Tổ chức</Typography>
            <Box>
                <Box>
                    <form className="login-form">
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