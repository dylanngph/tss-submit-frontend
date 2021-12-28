import React, { useState } from "react";
import { Box, FormControl, FormLabel, OutlinedInput, MenuItem, TextareaAutosize, FormGroup, Typography, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import DevelopmentTeam from 'components/custom/DevelopmentTeam';
import DevelopmentPartner from 'components/custom/DevelopmentPartner';
import uuid from 'uuid';

function Project(props) {
    const { children, value, index, ...other } = props;
    const [personName, setPersonName] = useState([]);

    const handleChangeSelectSocial = (event) => {
        const {
            target: { value, name },
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        const index = name.split("-").pop();
        let tpm_websitessocial = formValues.socialMedias;
        tpm_websitessocial[index].type = typeof value === 'string' ? value.split(',') : value;
        setFormValues({
            ...formValues,
            ["socialMedias"]: tpm_websitessocial,
        });
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
        devTeam: [
            { id: uuid(), avatar: [], name: '', position: '' },
            { id: uuid(), avatar: [], name: '', position: '' },
            { id: uuid(), avatar: [], name: '', position: '' },
        ],
        partners: [
            { id: uuid(), imgPartner: [], name: '', website: '' },
            { id: uuid(), imgPartner: [], name: '', website: '' },
            { id: uuid(), imgPartner: [], name: '', website: '' },
        ],
        description: "",
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

    const [formValues, setFormValues] = useState(defaultValues);
    const [validator, setValidator] = useState({});

    const setFormValuesProject = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.indexOf('website-') !== -1) {
            const index = name.split("-").pop();
            let tpm_websites = formValues.websites;
            tpm_websites[index] = value;
            setFormValues({
                ...formValues,
                ["websites"]: tpm_websites,
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value,
            });
        }
        validate(e);
    };

    const handleInputChangeSocial = (e) => {
        const { name, value } = e.target;
        const index = name.split("-").pop();
        let tpm_websitessocial = formValues.socialMedias;
        tpm_websitessocial[index].link = value;
        setFormValues({
            ...formValues,
            ["socialMedias"]: tpm_websitessocial,
        });
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (name.indexOf('website-') !== -1) {
            setValidator({
                ...validator,
                [name]: value && validURL(value)  ? false : true,
            });
        } else {
            setValidator({
                ...validator,
                [name]: value ? false : true,
            });
        }
    };

    const validate = (e) => {
        const { name, value } = e.target;
        if (!e.target.hasAttribute('required')) return;
        setValidator({
            ...validator,
            [name]: value ? false : true,
        });
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
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

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
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
                        <FormLabel>Tên dự án</FormLabel>
                        <OutlinedInput
                            required
                            id="projectName"
                            name="projectName"
                            type="text"
                            placeholder="Tên dự án"
                            value={formValues.projectName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.projectName}
                        />
                        {
                            validator.projectName &&
                            <FormHelperText error>Tên dự án không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Logo</FormLabel>
                        <OutlinedInput
                            required
                            id="logo"
                            name="logo"
                            type="file"
                            value={formValues.logo}
                            inputProps={{accept:".png,.svg,.jpeg"}}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.logo}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Mô tả , giới thiệu dự án</FormLabel>
                        <TextareaAutosize
                            required
                            minRows={8}
                            maxRows={8}
                            name="description"
                            placeholder="Mô tả dự án ngắn gọn."
                            style={{ width: "100%", fontFamily: 'Inter' }}
                            value={formValues.description}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            className={`textarea-required ${validator.description ? "textarea-required-error-null" : ""}`}
                        />
                        {
                            validator.description &&
                            <FormHelperText error>Mô tả không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Whitepaper</FormLabel>
                        <OutlinedInput
                            id="whitepaper"
                            name="whitepaper"
                            type="file"
                            inputProps={{accept:".png,.svg,.jpeg"}}
                            value={formValues.whitepaper}
                            onChange={handleInputChange}
                            // onBlur={handleInputBlur}
                            error={validator.whitepaper}
                        />
                    </FormControl>
                    <Box className="form-control mb-16">
                        <FormLabel>Đội ngũ phát triển</FormLabel>
                        <DevelopmentTeam defaultValues={defaultValues} setFormValuesProject={setFormValuesProject} />
                    </Box>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đối tác phát triển (Không bắt buộc)</FormLabel>
                        <DevelopmentPartner defaultValues={defaultValues} setFormValuesProject={setFormValuesProject} />
                    </FormControl>
                    {formValues.websites.map((item, index) => (
                        <FormControl key={index} className="form-control">
                            {
                                index === 0 &&
                                <FormLabel>Website dự án</FormLabel>
                            }
                            <OutlinedInput
                                required
                                className="mb-16"
                                id={`website-${index}`}
                                name={`website-${index}`}
                                data-website={index}
                                type="text"
                                placeholder="Website"
                                value={formValues.websites[index]}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                error={validator[`website-${index}`]}
                            />
                            
                        </FormControl>
                    ))}
                    {
                        validator[`website-${index}`] &&
                        <FormHelperText error>Website không được để trống hoặc chưa đúng định dạng</FormHelperText>
                    }
                    <Box mt={2} mb={2} sx={{ display: "flex" }}>
                        <img src="/assets/icons/Vector.svg" alt="Vector" />
                        <Typography ml={1} sx={{ fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "19px", color: "#446DFF", cursor: "pointer" }}
                            onClick={addWebsite}>
                            Thêm
                        </Typography>
                    </Box>
                        
                    <Box key={index} className="form-control mb-16">
                        <Box>Mạng xã hội</Box>
                        {formValues.socialMedias.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", flexDirection: "row", position: "relative" }}>
                                <Box sx={{ display: "flex", position: "relative" }} mb={2} className={`box-select-social ${validator[`websociallink-${index}`] ? "box-select-social-error-null" : ""}`}>
                                    <Select sx={{ width: "159px", borderRadius: "8px 0px 0px 8px", background: "#EFF2F5", "& .MuiSelect-select > img": { display: 'none'} }}
                                        value={formValues.socialMedias[index].type}
                                        name={`websocial-${index}`}
                                        onChange={handleChangeSelectSocial}
                                        input={<OutlinedInput label="Tag" />}
                                        className="social-items"
                                    >
                                        {socials.map((item, index) => (
                                            <MenuItem key={index} className="social-item" key={item.name} value={item.value}>
                                                <img src={item.icon} alt={item.name} />
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <span className="line-verticle"></span>
                                    <OutlinedInput sx={{ width: "269px", borderRadius: "0px 8px 8px 0px", background: "#EFF2F5" }}
                                        id={`websociallink-${index}`}
                                        name={`websociallink-${index}`}
                                        type="text"
                                        value={formValues.socialMedias[index].link}
                                        onChange={handleInputChangeSocial}
                                    />
                                </Box>
                            </Box>
                        ))}
                        <Box mt={2} mb={2} sx={{ display: "flex" }}>
                            <img src="/assets/icons/Vector.svg" alt="Vector" />
                            <Typography ml={1} sx={{ fontStyle: "normal", fontWeight: "600", fontSize: "16px", lineHeight: "19px", color: "#446DFF", cursor: "pointer" }}
                                onClick={addSocial}>
                                Thêm
                            </Typography>
                        </Box>
                    </Box>
                </form>
            )}
        </Box>
    );
}

export default Project;