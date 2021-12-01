import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Select, MenuItem, TextField } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Link } from 'react-router-dom'

function Incorporation(props) {
    const { children, value, index, ...other } = props;
    let businessAreas = [
        {
            value: 1,
            area: "Thú nuôi của bạn tên là gì?",
        },
        {
            value: 2,
            area: "Bố và mẹ bạn gặp nhau lần đầu tiên ở đâu?",
        },
        {
            value: 3,
            area: "Tên người bạn thân thời bé của bạn?",
        },
        {
            value: 4,
            area: "Công việc mơ ước của bạn là gì?",
        },
        {
            value: 5,
            area: "Biệt danh của bạn thời đi học là gì?",
        },
        {
            value: 6,
            area: "Món ăn ưa thích của bạn là gì?",
        },
    ]

    const defaultValues = {
        incorporationName: "",
        incorporationAddress: "",
        transactionName: "",
        transactionAddress: "",
        businessAreas: 1,
        companyCode: "",
        taxCode: "",
        acceptDate: React.useState(new Date('2014-08-18T21:11:54')),
        businessLicense: "",
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
                        <FormLabel>Tên tổ chức</FormLabel>
                        <OutlinedInput
                            id="incorporationName"
                            name="incorporationName"
                            type="text"
                            placeholder="Tên tổ chức"
                            value={formValues.incorporationName}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ trụ sở</FormLabel>
                        <OutlinedInput
                            id="incorporationAddress"
                            name="incorporationAddress"
                            type="text"
                            placeholder="Địa chỉ"
                            value={formValues.incorporationAddress}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tên giao dịch (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="transactionName"
                            name="transactionName"
                            type="text"
                            placeholder="Tên giao dịch"
                            value={formValues.transactionName}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ giao dịch (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="transactionAddress"
                            name="transactionAddress"
                            type="text"
                            placeholder="Địa chỉ"
                            value={formValues.transactionAddress}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Lĩnh vực kinh doanh</FormLabel>
                        <Select
                            labelId="businessAreas"
                            name="businessAreas"
                            id="businessAreas"
                            placeholder="Lĩnh vực kinh doanh"
                            value={formValues.businessAreas}
                            onChange={handleInputChange}
                        >
                            {businessAreas.map((item, index) => (
                                <MenuItem value={item.value}>{item.area}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mã số doanh nghiệp / số giấy phép thành lập</FormLabel>
                        <OutlinedInput
                            id="companyCode"
                            name="companyCode"
                            type="text"
                            placeholder="Mã số doanh nghiệp"
                            value={formValues.companyCode}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mã số thuế (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="taxCode"
                            name="taxCode"
                            type="text"
                            placeholder="Mã số thuế"
                            value={formValues.taxCode}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16 datePicker">
                        <FormLabel>Ngày cấp phép</FormLabel>
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
                        <FormLabel>Giấy phép đăng ký kinh doanh</FormLabel>
                        <OutlinedInput
                            id="businessLicense"
                            name="businessLicense"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.businessLicense}
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

export default Incorporation;