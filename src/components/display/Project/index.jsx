import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, MenuItem, TextareaAutosize, FormGroup, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Link } from 'react-router-dom'
import DevelopmentTeam from 'components/custom/DevelopmentTeam'
import DevelopmentPartner from 'components/custom/DevelopmentPartner'

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
            value: "Facebook",
            name: "Facebook",
            icon: "/assets/icons/socials/facebook.svg"
        },
        {
            value: "Telegram",
            name: "Telegram",
            icon: "/assets/icons/socials/telegram.svg"
        },
        {
            value: "Zalo",
            name: "Zalo",
            icon: "/assets/icons/socials/zalo.svg"
        },
        {
            value: "Tiktok",
            name: "Tiktok",
            icon: "/assets/icons/socials/tiktok.svg"
        },
        {
            value: "Discord",
            name: "Discord",
            icon: "/assets/icons/socials/discord.svg"
        },
        {
            value: "Medium",
            name: "Medium",
            icon: "/assets/icons/socials/medium.svg"
        },
        {
            value: "Twitter",
            name: "Twitter",
            icon: "/assets/icons/socials/twitter.svg"
        },
        {
            value: "Instagram",
            name: "Instagram",
            icon: "/assets/icons/socials/instagram.svg"
        },
    ]

    const defaultValues = {
        projectName: "",
        logo: "",
        whitepaper: "",
        description: "",
        whitepaper: "",
        businessAreas: 1,
        companyCode: "",
        taxCode: "",
        acceptDate: React.useState(new Date('2014-08-18T21:11:54')),
        businessLicense: "",
        websites: [''],
        socialMedias: [
            {
                type: '',
                link: '',
            }
        ]
    };

    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleArrayChange = (e) => {
        console.log(e.target)
    }

    const handleDatePickerChange = (newValue) => {
        setFormValues({
            ...formValues,
            ["acceptDate"]: newValue,
        });
    };

    const addWebsite = () => {
        const nextHiddenItem = formValues.websites;
        nextHiddenItem.push('');
        if (nextHiddenItem) {
            setFormValues({
                ...formValues,
                ["websites"]: nextHiddenItem,
            });
        }
    }

    const addSocial = () => {
        const nextHiddenItem = formValues.socialMedias;
        nextHiddenItem.push({
            type: '',
            link: '',
        });
        if (nextHiddenItem) {
            setFormValues({
                ...formValues,
                ["socialMedias"]: nextHiddenItem,
            });
        }
    }

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
                            maxRows={8}
                            placeholder="Mô tả dự án ngắn gọn."
                            style={{ width: "100%" }}
                        // value={formValues.description}
                        // onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Whitepaper</FormLabel>
                        <OutlinedInput
                            id="whitepaper"
                            name="whitepaper"
                            type="file"
                            placeholder="Tải lên (Tối đa 5mb)"
                            value={formValues.whitepaper}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đội ngũ phát triển</FormLabel>
                        <DevelopmentTeam />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đối tác phát triển (Không bắt buộc)</FormLabel>
                        <DevelopmentPartner />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Website dự án</FormLabel>
                        {formValues.websites.map((item, index) => (
                            <OutlinedInput
                                className="mb-16"
                                id={`website-${index}`}
                                name={`website-${index}`}
                                type="text"
                                placeholder="Website"
                            // value={item}
                            // onChange={handleArrayChange}
                            />
                        ))}
                        <Box mt={2} sx={{ display: "flex" }}>
                            <img src="/assets/icons/Vector.svg" alt="Vector" />
                            <Typography ml={1} sx={{ fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "19px", color: "#446DFF", cursor: "pointer" }}
                                onClick={addWebsite}>
                                Thêm
                            </Typography>
                        </Box>

                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mạng xã hội</FormLabel>
                        <FormGroup sx={{ display: "flex", flexDirection: "row", position: "relative" }}>
                        {formValues.socialMedias.map((item, index) => (
                            <Box sx={{ display: "flex", position: "relative" }} mb={2}>
                                <Select sx={{ width: "159px", borderRadius: "8px 0px 0px 8px", background: "#EFF2F5" }}
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    className="social-items"
                                >
                                    {socials.map((item, index) => (
                                        <MenuItem className="social-item" key={item.name} value={item.value}>
                                            <img src={item.icon} alt={item.name} />
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <span className="line-verticle"></span>
                                <OutlinedInput sx={{ width: "269px", borderRadius: "0px 8px 8px 0px", background: "#EFF2F5" }}
                                    id="projectName"
                                    name="projectName"
                                    type="text"
                                    value={formValues.socialLink}
                                    onChange={handleInputChange}
                                />
                            </Box>
                        ))}
                            <Box mt={2} sx={{ display: "flex" }}>
                                <img src="/assets/icons/Vector.svg" alt="Vector" />
                                <Typography ml={1} sx={{ fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "19px", color: "#446DFF", cursor: "pointer" }}
                                    onClick={addSocial}>
                                    Thêm
                                </Typography>
                            </Box>
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