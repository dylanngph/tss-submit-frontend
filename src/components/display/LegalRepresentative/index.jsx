import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, MenuItem, Select, FormGroup, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function LegalRepresentative(props) {
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

    let informations = [
        {
            value: "1",
            name: "CMND",
        },
        {
            value: "2",
            name: "CCCD",
        },
        {
            value: "3",
            name: "Hộ Chiếu",
        },
    ]

    const defaultValues = {
        tokenName: "",
        smartContractAddress: "",
        symbol: "",
        position: "",
        cmndBefore: "",
        cmndAfter: "",
        phone: "",
        email: "",
        id: "",
        idType: "",
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
                    <FormControl className="form-control mb-16">
                        <FormLabel>Họ và Tên</FormLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Họ và Tên"
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16 datePicker">
                        <FormLabel>Ngày sinh</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                inputFormat="MM/dd/yyyy"
                                value={formValues.acceptDate}
                                onChange={handleDatePickerChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Chức vụ</FormLabel>
                        <OutlinedInput
                            id="position"
                            name="position"
                            type="text"
                            placeholder="Chức vụ"
                            value={formValues.position}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Giấy tờ tùy thân</FormLabel>
                        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                            <Select sx={{ maxWidth: "140px", width: "100%", marginRight: "12px" }}
                                labelId="idType"
                                name="idType"
                                id="idType"
                                value={formValues.idType}
                                onChange={handleInputChange}
                            >
                                {informations.map((item, index) => (
                                    <MenuItem value={item.value}>{item.name}</MenuItem>
                                ))}
                            </Select>
                            <OutlinedInput sx={{ maxWidth: "275px", width: "100%" }}
                                id="id"
                                name="id"
                                type="text"
                                placeholder="0678****"
                                value={formValues.id}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tải lên mặt trước</FormLabel>
                        <OutlinedInput
                            id="cmndBefore"
                            name="cmndBefore"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.cmndBefore}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tải lên mặt sau</FormLabel>
                        <OutlinedInput
                            id="cmndAfter"
                            name="cmndAfter"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.cmndAfter}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Điện thoại</FormLabel>
                        <OutlinedInput
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Điện thoại"
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Email</FormLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <Button variant="contained" className="button mb-16" type="submit">
                        Tiếp tục
                    </Button>
                </form>
            )}
        </Box>
    );
}

export default LegalRepresentative;