import { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, OutlinedInput, MenuItem, TextareaAutosize, Typography, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import { socialsListConstant } from 'constants/config';
import DevelopmentTeam from 'components/custom/DevelopmentTeam';
import DevelopmentPartner from 'components/custom/DevelopmentPartner';

function Project(props) {
    const { projectItem, children, value, index, ...other } = props;

    const handleChangeSelectSocial = (event) => {
        const { target: { value, name } } = event;
        const index = name.split("-").pop();
        let tpm_websitessocial = formValues.socialWebs;
        tpm_websitessocial[index].name = value;
        setFormValues({
            ...formValues,
            ["socialWebs"]: tpm_websitessocial,
        });
    };

    const [formValues, setFormValues] = useState(projectItem);
    const [validator, setValidator] = useState({});

    const checkDataActiveButton = () => {
        if (formValues.projectName && 
            formValues.logo && 
            formValues.description && 
            formValues.whitepaper && 
            formValues.developmentTeam.length && formValues.developmentTeam[0].image &&
            formValues.developmentPartner.length && formValues.developmentPartner[0].image &&
            formValues.websites.length && formValues.websites[0] &&
            formValues.socialWebs.length && formValues.socialWebs[0].name && formValues.socialWebs[0].link
            ) {
                props.setStateNextButton(true)
            }
        else
            props.setStateNextButton(false)
    };

    const setFormValuesProject = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
        checkDataActiveButton();
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
            const typeFile = ["logo", "whitepaper"];
            if (typeFile.includes(name)) {
                if (e.target.files) {
                    // setFormValues({
                    //     ...formValues,
                    //     [name]: e.target.files[0],
                    // });
                    let tpm = formValues;
                    tpm[name] = e.target.files[0];
                    setFormValues(tpm);
                } else {
                    // setFormValues({
                    //     ...formValues,
                    //     [name]: e.target.files[0],
                    // });
                    let tpm = formValues;
                    tpm[name] = null;
                    setFormValues(tpm);
                }
            } else {
                setFormValues(prevState => { return {
                    ...prevState,
                    [name]: value,
                }});
            }
        }
        validate(e);
    };

    const handleInputChangeSocial = (e) => {
        const { name, value } = e.target;
        const index = name.split("-").pop();
        let tpm_websitessocial = formValues.socialWebs;
        tpm_websitessocial[index].link = value;
        setFormValues({
            ...formValues,
            ["socialWebs"]: tpm_websitessocial,
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
        checkDataActiveButton();
    };

    const addWebsite = () => {
        const nextHiddenItem = formValues.websites;
        nextHiddenItem.push('');
        if (nextHiddenItem) {
            setFormValues({
                ...formValues,
                ["websites"]: nextHiddenItem,
            });
            props.setProjectItemStep(2, formValues);
        }
    }

    const addSocial = () => {
        const nextHiddenItem = formValues.socialWebs;
        nextHiddenItem.push({
            type: '',
            link: '',
        });
        if (nextHiddenItem) {
            setFormValues({
                ...formValues,
                ["socialWebs"]: nextHiddenItem,
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
                            // value={formValues.logo}
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
                            inputProps={{accept:".pdf"}}
                            onChange={handleInputChange}
                            error={validator.whitepaper}
                        />
                    </FormControl>
                    <Box className="form-control mb-16">
                        <FormLabel>Đội ngũ phát triển</FormLabel>
                        <DevelopmentTeam view={false} defaultValues={projectItem} setFormValuesProject={setFormValuesProject} />
                    </Box>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Đối tác phát triển (Không bắt buộc)</FormLabel>
                        <DevelopmentPartner view={false} defaultValues={projectItem} setFormValuesProject={setFormValuesProject} />
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
                        {formValues.socialWebs.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", flexDirection: "row", position: "relative" }}>
                                <Box sx={{ display: "flex", position: "relative" }} mb={2} className={`box-select-social ${validator[`websociallink-${index}`] ? "box-select-social-error-null" : ""}`}>
                                    <Select sx={{ width: "159px", borderRadius: "8px 0px 0px 8px", background: "#EFF2F5", "& .MuiSelect-select > img": { display: 'none'} }}
                                        value={formValues.socialWebs[index].name}
                                        name={`websocial-${index}`}
                                        onChange={handleChangeSelectSocial}
                                        input={<OutlinedInput label="Tag" />}
                                        className="social-items"
                                    >
                                        {socialsListConstant.map((item, index) => (
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
                                        value={formValues.socialWebs[index].link}
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