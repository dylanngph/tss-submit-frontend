import { useState, useEffect } from "react";
import { Box, Autocomplete, FormControl, FormLabel, OutlinedInput, TextField, FormHelperText } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { businessAreas } from 'constants/config';

function Incorporation(props) {
    const { projectItem, children, value, index, ...other } = props;

    const [formValues, setFormValues] = useState(projectItem);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        validateForm({ [name]: value });
    };

    const handleInputChangeFile = (e) => {
        setFormValues({
            ...formValues,
            ["businessLicense"]: e.target.files[0],
        });
        validateForm({ ["businessLicense"]: e.target.files[0]?true:false });
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        validateForm({ [name]: value });
    }

    const handleInputChangeBusinessAreas = (newValue) => {
        const { name, value } = newValue.target;

        const item = [{
            value: businessAreas.length + 1,
            area: value,
        }];
        setFormValues({
            ...formValues,
            ['businessAreas']: item,
        });
        console.log('formValues==>', formValues);
    }

    const handleDatePickerChange = (newValue) => {
        setFormValues({
            ...formValues,
            ["acceptDate"]: newValue,
        });
        validateForm({ ["acceptDate"]: newValue });
    };

    const handleAutocompleteChange = (event, newValue) => {
        setFormValues({
            ...formValues,
            ['businessAreas']: newValue,
        });
        validateForm({ ["businessAreas"]: newValue });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const validateForm = (fieldValues) => {
        let temp = { ...errors }
        if ('incorporationName' in fieldValues)
            temp.incorporationName = fieldValues.incorporationName ? false : true;
        if ('incorporationAddress' in fieldValues)
            temp.incorporationAddress = fieldValues.incorporationAddress ? false : true;
        if ('companyCode' in fieldValues)
            temp.companyCode = fieldValues.companyCode ? false : true;
        if ('acceptDate' in fieldValues)
            temp.acceptDate = fieldValues.acceptDate ? false : true;
        if ('businessLicense' in fieldValues)
            temp.businessLicense = fieldValues.businessLicense ? false : true;
        if ('businessAreas' in fieldValues)
            temp.businessAreas = fieldValues.businessAreas.length ? false : true;
        setErrors({
            ...temp
        })
        const stateActive = Object.values(temp).every((item) => !item);
        if (stateActive && checkRequire()) {
            props.setStateNextButton(true);
        } else {
            props.setStateNextButton(false);
        }
    };

    const checkRequire = () => {
        if (formValues.incorporationName && formValues.incorporationAddress && formValues.companyCode && formValues.acceptDate && formValues.businessAreas.length) return true;
        return false;
    };

    useEffect(() => {
        props.setProjectItemStep(formValues);
    }, [formValues])

    const autocomplete = {
        border: '1px solid #EFF2F5',
        background: '#EFF2F5',
        borderRadius: '8px',
        marginBottom: '5px'
    }

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
                            required
                            id="incorporationName"
                            name="incorporationName"
                            type="text"
                            placeholder="Tên tổ chức"
                            value={formValues.incorporationName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={errors.incorporationName}
                        />
                        {
                            errors.incorporationName &&
                            <FormHelperText error>Tên tổ chức không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ trụ sở</FormLabel>
                        <OutlinedInput
                            required
                            id="incorporationAddress"
                            name="incorporationAddress"
                            type="text"
                            placeholder="Địa chỉ"
                            value={formValues.incorporationAddress}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={errors.incorporationAddress}
                        />
                        {
                            errors.incorporationAddress &&
                            <FormHelperText error>Địa chỉ trụ sở không được để trống</FormHelperText>
                        }
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
                        <Autocomplete
                            sx={autocomplete}
                            multiple
                            id="tags-outlined"
                            options={businessAreas}
                            value={formValues.businessAreas}
                            getOptionLabel={(businessAreas) => businessAreas.area}
                            isOptionEqualToValue={(option, value) => option.area === value.area}
                            onChange={handleAutocompleteChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    error={errors.businessAreas}
                                    placeholder="Lĩnh vực kinh doanh"
                                />
                            )}
                        />
                        <OutlinedInput
                            id="businessAreasABC"
                            name="businessAreasABC"
                            type="text"
                            placeholder="Lĩnh vực kinh doanh khác"
                            value={formValues.businessAreasABC}
                            onChange={handleInputChangeBusinessAreas}
                        />
                        {
                            errors.businessAreas &&
                            <FormHelperText error>Lĩnh vực kinh doanh không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mã số doanh nghiệp / số giấy phép thành lập</FormLabel>
                        <OutlinedInput
                            required
                            id="companyCode"
                            name="companyCode"
                            type="number"
                            placeholder="Mã số doanh nghiệp"
                            value={formValues.companyCode}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={errors.companyCode}
                        />
                        {
                            errors.companyCode &&
                            <FormHelperText error>Mã số doanh nghiệp không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mã số thuế (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="taxCode"
                            name="taxCode"
                            type="number"
                            placeholder="Mã số thuế"
                            value={formValues.taxCode}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16 datePicker">
                        <FormLabel>Ngày cấp phép</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                inputFormat="dd/MM/yyyy"
                                value={formValues.acceptDate}
                                onChange={handleDatePickerChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Giấy phép đăng ký kinh doanh</FormLabel>
                        <OutlinedInput
                            required
                            id="businessLicense"
                            name="businessLicense"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            inputProps={{ accept: "application/pdf" }}
                            onChange={handleInputChangeFile}
                            error={errors.businessLicense}
                        />
                        {
                            errors.businessLicense &&
                            <FormHelperText error>Giấy phép đăng ký kinh doanh chưa được chọn</FormHelperText>
                        }
                    </FormControl>
                </form>
            )}
        </Box>
    );
}

export default Incorporation;