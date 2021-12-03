import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, MenuItem, TextareaAutosize, FormGroup } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Link } from 'react-router-dom'

function Project(props) {
    const { children, value, index, ...other } = props;
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    let socials = [
        {
            value: "facebook",
            name: "Facebook",
            icon: "/assets/icons/socials/facebook.svg"
        },
        {
            value: "telegram",
            name: "Telegram",
            icon: "/assets/icons/socials/telegram.svg"
        },
        {
            value: "zalo",
            name: "Zalo",
            icon: "/assets/icons/socials/zalo.svg"
        },
        {
            value: "tiktok",
            name: "Tiktok",
            icon: "/assets/icons/socials/tiktok.svg"
        },
        {
            value: "discord",
            name: "Discord",
            icon: "/assets/icons/socials/discord.svg"
        },
        {
            value: "medium",
            name: "Medium",
            icon: "/assets/icons/socials/medium.svg"
        },
        {
            value: "twitter",
            name: "Twitter",
            icon: "/assets/icons/socials/twitter.svg"
        },
        {
            value: "instagram",
            name: "Instagram",
            icon: "/assets/icons/socials/instagram.svg"
        },
    ]

    const defaultValues = {
        projectName: "",
        logo: "",
        description: "",
        whitepaper: "",
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
                        <FormLabel>Tên dự án</FormLabel>
                        <OutlinedInput
                            id="projectName"
                            name="projectName"
                            type="text"
                            placeholder="Tên dự án"
                            value={formValues.projectName}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Logo</FormLabel>
                        <OutlinedInput
                            id="logo"
                            name="logo"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.logo}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mô tả , giới thiệu dự án</FormLabel>
                        <TextareaAutosize
                            minRows={8}
                            placeholder="Mô tả dự án ngắn gọn."
                            style={{ width: 400 }}
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Whitepaper</FormLabel>
                        <OutlinedInput
                            id="whitepaper"
                            name="whitepaper"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.logo}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đội ngũ phát triển</FormLabel>
                        <button>Đội ngũ phát triển</button>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đối tác phát triển (Không bắt buộc)</FormLabel>
                        <button>Đối tác phát triển (Không bắt buộc)</button>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Website dự án</FormLabel>
                        <button>Website dự án</button>
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mạng xã hội</FormLabel>
                        <FormGroup sx={{display: "flex", flexDirection: "row", position: "relative"}}>
                            <Select sx={{width: "159px", borderRadius: "8px 0px 0px 8px", background: "#EFF2F5"}}
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {socials.map((item, index) => (
                                    <MenuItem key={item.name} value={item.value}>
                                        <img src={item.icon} alt={item.name} />
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <span className="line-verticle"></span>
                            <OutlinedInput sx={{width: "269px", borderRadius: "0px 8px 8px 0px", background: "#EFF2F5"}}
                                id="projectName"
                                name="projectName"
                                type="text"
                                value={formValues.socialLink}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                    </FormControl>
                    <Button variant="contained" className="button mb-16" type="submit">
                        Tiếp tục
                    </Button>
                </form>
            )}
        </Box>
    );
}

export default Project;