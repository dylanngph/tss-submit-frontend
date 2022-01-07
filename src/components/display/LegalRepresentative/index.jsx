import { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, OutlinedInput, MenuItem, Select, FormGroup, TextField, FormHelperText } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function LegalRepresentative(props) {
    const { projectItem, children, value, index, ...other } = props;

    const idTypePassport = "3";
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
            value: idTypePassport,
            name: "Hộ Chiếu",
        },
    ]

    const [formValues, setFormValues] = useState(projectItem);
    const [validator, setValidator] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const typeFile = ["frontIdImage", "backIdImage"];
        if (typeFile.includes(name)) {
            setFormValues({
                ...formValues,
                [name]: e.target.files[0],
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value,
            });
        }
        validate(e);
    };

    const handleInputChangeSelect = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleInputBlur = (e) => {
        validate(e);
    };

    const validate = (e) => {
        const { name, value } = e.target;
        if (!e.target.hasAttribute('required')) return;
        setValidator({
            ...validator,
            [name]: value ? false : true,
        });
        checkDataActiveButton();
    };

    const handleDatePickerChange = (newValue) => {
        setFormValues({
            ...formValues,
            ["dob"]: newValue,
        });
        checkDataActiveButton();
    };

    const checkDataActiveButton = () => {
        if (formValues.name &&
            formValues.position &&
            formValues.phone &&
            formValues.email &&
            formValues.idType &&
            formValues.idAuth &&
            formValues.frontIdImage &&
            formValues.backIdImage 
            ) {
                props.setStateNextButton(true)
            }
        else
            props.setStateNextButton(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        props.setProjectItemStep(formValues);
    }, [formValues])

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
                            required
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Họ và Tên"
                            value={formValues.name}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.name}
                        />
                        {
                            validator.name &&
                            <FormHelperText error>Họ và Tên không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16 datePicker">
                        <FormLabel>Ngày sinh</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                inputFormat="dd/MM/yyyy"
                                value={formValues.dob}
                                onChange={handleDatePickerChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Chức vụ</FormLabel>
                        <OutlinedInput
                            required
                            id="position"
                            name="position"
                            type="text"
                            placeholder="Chức vụ"
                            value={formValues.position}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.position}
                        />
                        {
                            validator.position &&
                            <FormHelperText error>Chức vụ không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <Box className="form-control mb-16">
                        <FormLabel>Giấy tờ tùy thân</FormLabel>
                        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                            <Select sx={{ maxWidth: "140px", width: "100%", marginRight: "12px" }}
                                labelId="idType"
                                name="idType"
                                id="idType"
                                value={formValues.idType}
                                onChange={handleInputChangeSelect}
                            >
                                {informations.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                                ))}
                            </Select>
                            <OutlinedInput sx={{ maxWidth: "275px", width: "100%" }}
                                required
                                id="idAuth"
                                name="idAuth"
                                type="text"
                                placeholder="0678****"
                                value={formValues.idAuth}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                error={validator.idAuth}
                            />
                        </FormGroup>
                    </Box>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tải lên mặt trước</FormLabel>
                        <OutlinedInput
                            required
                            id="frontIdImage"
                            name="frontIdImage"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            inputProps={{accept:".png,.svg,.jpeg"}}
                            onChange={handleInputChange}
                            error={validator.frontIdImage}
                        />
                    </FormControl>
                    {
                        formValues.idType !== idTypePassport &&
                        <FormControl className="form-control mb-16">
                            <FormLabel>Tải lên mặt sau</FormLabel>
                            <OutlinedInput
                                required
                                id="backIdImage"
                                name="backIdImage"
                                type="file"
                                placeholder="Tải lên (Tối đa 5mb)"
                                inputProps={{accept:".png,.svg,.jpeg"}}
                                onChange={handleInputChange}
                                error={validator.backIdImage}
                            />
                        </FormControl>
                    }
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ liên lạc (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Địa chỉ liên lạc"
                            value={formValues.address}
                            onChange={handleInputChange}
                            error={validator.address}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Điện thoại</FormLabel>
                        <OutlinedInput
                            required
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Điện thoại"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.phone}
                        />
                        {
                            validator.phone &&
                            <FormHelperText error>Điện thoại không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Email</FormLabel>
                        <OutlinedInput
                            required
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.email}
                        />
                        {
                            validator.email &&
                            <FormHelperText error>Email không được để trống</FormHelperText>
                        }
                    </FormControl>
                </form>
            )}
        </Box>
    );
}

export default LegalRepresentative;