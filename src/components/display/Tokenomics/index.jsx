import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, MenuItem, TextareaAutosize, FormGroup, TextField, Autocomplete, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TokenAllocationRate from 'components/custom/TokenAllocationRate'

function Tokenomics(props) {
    const { children, value, index, ...other } = props;
    const [personName, setPersonName] = useState([]);
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;  

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    let communications = [
        {
            value: "1",
            name: "Binance Smart Chain",
        },
        {
            value: "2",
            name: "Ethereum",
        },
        {
            value: "3",
            name: "Kardian",
        },
    ]

    let standards = [
        {
            value: "1",
            name: "ERC20",
        },
        {
            value: "2",
            name: "BEP20",
        },
        {
            value: "3",
            name: "KRC20",
        },
    ]

    const defaultValues = {
        tokenName: "",
        smartContractAddress: "",
        symbol: ""
    };

    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleDatePickerChange = (newValue) => {
        setFormValues({
            ...formValues,
            ["acceptDate"]: newValue,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <Box role="tabpanel" className="application"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <form className="login-form" onSubmit={handleSubmit}>
                    <FormControl className="form-control mb-16" sx={{
                        width: "48%",
                        marginRight: "15px",
                    }}>
                        <FormLabel>Tên gọi Token</FormLabel>
                        <OutlinedInput
                            id="tokenName"
                            name="tokenName"
                            type="text"
                            placeholder="Tên gọi Token"
                            value={formValues.tokenName}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16" sx={{
                        width: "48%",
                    }}>
                        <FormLabel>Ký hiệu</FormLabel>
                        <OutlinedInput
                            id="symbol"
                            name="symbol"
                            type="text"
                            placeholder="BIT, JDT..."
                            value={formValues.symbol}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Nền tảng (Không bắt buộc)</FormLabel>
                        <Autocomplete sx={{
                            background: "#EFF2F5",
                            borderRadius: "8px",
                            width: "100% !important"
                        }}
                            multiple
                            id="communication"
                            options={communications}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Nền tảng" />
                            )}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tiêu chuẩn (Không bắt buộc)</FormLabel>
                        <Autocomplete sx={{
                            background: "#EFF2F5",
                            borderRadius: "8px",
                            width: "100% !important"
                        }}
                            multiple
                            id="standard"
                            options={standards}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Tiêu chuẩn" />
                            )}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ Smart Contract (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="smartContractAddress"
                            name="smartContractAddress"
                            type="text"
                            placeholder="0x00000000"
                            value={formValues.smartContractAddress}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Phân bổ token</FormLabel>
                        <TokenAllocationRate />
                    </FormControl>
                </form>
            )}
        </Box>
    );
}

export default Tokenomics;