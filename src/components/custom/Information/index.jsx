import { useState } from "react";
import { Box, Button, OutlinedInput, Typography, Tooltip, TextField, FormLabel, Autocomplete, Select, MenuItem,TextareaAutosize } from '@mui/material';
import { listTitle } from './config';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ImageUploading from 'react-images-uploading';
import DevelopmentTeam from 'components/custom/DevelopmentTeam';
import DevelopmentPartner from 'components/custom/DevelopmentPartner';
import TokenAllocationRate from 'components/custom/TokenAllocationRate';
import { businessAreas, socialsListConstant } from 'constants/config';
import styled from '@emotion/styled';
import axios from 'axios';
import useToken from 'components/hook/useToken';

const Information = (props) => {
    const [project, setProject] = useState(props.project);
    const { token, setToken } = useToken();
    console.log('project==>', project);
    const [imageLogo, setImageLogo] = useState([]);
    const [businessFieldUpdate, setBusinessFieldUpdate] = useState(() => {
        let arrTpm = [];
        props?.project?.businessAreas.map((item) => {
            arrTpm.push({
                value: item,
                area: item,
            })
        })
        return arrTpm;
    });
    const [formValues, setFormValues] = useState(project);
    // const [businessFieldUpdate, setBusinessFieldUpdate]
    const [businessLicense, setBusinessLicense] = useState();

    const setFormValuesProject = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const idTypePassport = "3";
    const informations = [
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

    const inforItem = {
        display: "flex",
        flexDirection: "revert",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #A6B0C3",
        padding: '15px 0',
        flexWrap: 'wrap',

        '&:last-child': {
            borderBottom: "none",
        }
    }

    const wrapperBoxValue = {
        maxWidth: '50%',
        overflow: 'hidden',
        display: 'flex',
    }

    const boxFlag = {
        cursor: 'pointer',
        marginLeft: '5px',
    }

    const labelInforItem = {
        color: "#58667E",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
    }

    const wrapInfo = {
        padding: "4px 36px 4px",
        background: "#EFF2F5",
        borderRadius: "12px",
    }

    const styleDatePicker = {
        '& .MuiOutlinedInput-input': {
            width: '100px',
            marginRight: '-30px',
        }
    }

    const autocomplete = {
        border: '1px solid #EFF2F5',
        background: '#EFF2F5',
        borderRadius: '8px',
        marginBottom: '5px',
        minWidth: '80%',
        '& .MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root': {
            marginRigth: '35px',
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value,
        });
        console.log('project edit==>', project);
    };

    const handleInputWebsiteChange = (e) => {
        const { name, value } = e.target;
        e.target.value = value;
        let tpm = project;
        const pos = name.replace('websites', '');
        tpm.websites[pos] = value;
        setProject({
            ...project,
            tpm
        });
    };

    const handleAcceptDateChange = (newValue) => {
        setProject({
            ...project,
            ["acceptDate"]: newValue,
        });
    };

    const handleDobChange = (newValue) => {
        let tpm = project;
        tpm.legalRepresentative.dob = newValue;
        setProject({
            ...project,
            tpm
        });
    };

    const onChangeImageUpload = (imageList) => {
        setImageLogo(imageList);
        setProject({
            ...project,
            ['logo']: imageList[0].data_url,
        });
    };

    const handleAutocompleteChange = (event, newValue) => {
        setBusinessFieldUpdate(newValue);
        setProject({
            ...project,
            ["businessAreas"]: newValue,
        });
    };

    const handleInputChangeFile = (e) => {
        setProject({
            ...project,
            ["businessLicense"]: e.target.files[0],
        });
    };

    const handleInputChangeBusinessAreas = (e) => {
        const { value } = e.target;
        const item = [{
            value: businessAreas.length + 1,
            area: value,
        }];
        setBusinessFieldUpdate(item);
        setProject({
            ...project,
            ['businessAreas']: item,
        });
    }

    const handleInputChangeFileWhitepaper = (e) => {
        setProject({
            ...project,
            ['whitepaper']: e.target.files[0],
        });
    };

    const handleInputChangeSelect = (e) => {
        const { name, value } = e.target;
        let tpm = project;
        tpm.legalRepresentative.identity.idType = value;
        setProject({
            ...project,
            tpm,
        });
    };

    const handleInputIdentityChange = (e) => {
        const { name, value } = e.target;
        let tpm = project;
        tpm.legalRepresentative.identity.id = value;
        setProject({
            ...project,
            tpm,
        });
    };

    const handleInputFileIdentityChange = (e) => {
        const { name } = e.target;
        let tpm = project;
        tpm.legalRepresentative[name] = e.target.files[0];
        setProject({
            ...project,
            tpm,
        });
    };

    const formatDate = (date) => {
        return date.split("-").reverse().join("/");
    }

    const handleUpdateData = async () => {
        try {
            console.log('project==>', project);
            const res = await axios.post(`${process.env.REACT_APP_URL_API}/project/application/bussiness/change`, project,  { headers: {"Authorization" : `Bearer ${token}`} });
            if (res.data) {
                console.log('res===>', res);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = ({item}) => {
        let valueItem;

        if (project && props.stateEdit) {
            switch (item.key) {
                case 'incorporationName':
                case 'incorporationAddress':
                case 'transactionName':
                case 'companyCode':
                    valueItem = project?.[item.key];
                    break;
                case 'acceptDate':
                    // valueItem = project?.detail[item.key] ? formatDate(project?.detail[item.key]) : '';
                    valueItem = project?.[item.key];
                    break;
                case 'businessAreas':
                    valueItem = project?.[item.key].join("; ");
                    break;
                case 'communications':
                case 'standards':
                    valueItem = project[item.key].join(", ");
                    break;
                case 'name':
                case 'position':
                case 'address':
                case 'phone':
                case 'email':
                    valueItem = project?.legalRepresentative[item.key];
                    break;
                case 'dob':
                    // valueItem = project?.detail.legalRepresentative[item.key] ? formatDate(project?.detail.legalRepresentative[item.key]) : '';
                    valueItem = project?.legalRepresentative[item.key];
                    break;
                case 'identity':
                    valueItem = project?.legalRepresentative[item.key].id ? project?.legalRepresentative[item.key].id.substring(0, 3) + '******' : '*********';
                    break;
                case 'logo':
                    valueItem = `${project[item.key]}`;
                    break;
                case 'whitepaper':
                    valueItem = `${project[item.key]}`;
                    break;
                case 'smartContractAddress':
                    valueItem = project.smartContractAddress.substring(0, 8) + "..." + project.smartContractAddress.substring(project.smartContractAddress.length - 4, project.smartContractAddress.length);
                    break;
                case 'businessLicense':
                    valueItem = `${project?.[item.key]}`;
                    break;
                case 'developmentTeam':
                case 'developmentPartner':
                case 'tokenAllocations':
                    valueItem = 'Click to see more';
                    break;
                default:
                    valueItem = project[item.key];
                    break;
            }
        } else {
            // show preview
            if (project && project[item.key] && item.key!== "developmentTeam" && item.key!== "developmentPartner") {
                if (typeof(project[item.key]) === "string") {
                    valueItem = project[item.key];
                } else {
                    switch(item.key) {
                        case "businessAreas":
                            valueItem = project[item.key].map(e => e.area).join("; ");
                            break;
                        case "acceptDate":
                        case "dob":
                            valueItem = project[item.key].toLocaleDateString('vi-VI');
                            break;
                        case "standards":
                        case "communications":
                            valueItem = project[item.key].map(e => e.name).join(", ");
                            break;
                        case "businessLicense":
                        case "logo":
                        case "whitepaper":
                            valueItem = project[item.key].name;
                            break;
                        case "websites":
                            valueItem = project[item.key].join(", ");
                            break;
                        default:
                            valueItem = typeof(project[item.key]);
                            break;
                    }
                }
            }
            if (item.key === "developmentTeam" || item.key === "developmentPartner" || item.key === "developmentPartner") {
                valueItem = 'Click to see more'
            }
            if (item.key === "identity") valueItem = project && project["idAuth"];
        }

        switch(item.key) {
            case 'businessAreas':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', width: '100%' }}>
                                        <Box sx={{ display: "flex", flexDirection: "row", width: '100%' }}>
                                            <Box sx={{ width: 'calc(100% - 15px)' }}>
                                                <Autocomplete
                                                    sx={autocomplete}
                                                    multiple
                                                    id="tags-outlined"
                                                    options={businessAreas}
                                                    value={businessFieldUpdate}
                                                    defaultValue={businessFieldUpdate}
                                                    getOptionLabel={(businessAreas) => businessAreas.area}
                                                    isOptionEqualToValue={(option, value) => option.area === value.area}
                                                    onChange={handleAutocompleteChange}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            placeholder="Lĩnh vực kinh doanh"
                                                        />
                                                    )}
                                                />
                                            </Box>
                                            <Box sx={boxFlag}>
                                                <Tooltip title={project.note.flags[item.key]}>
                                                    <img src="/assets/icons/flag.svg" />
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                        <OutlinedInput
                                            id="businessAreasABC"
                                            name="businessAreasABC"
                                            type="text"
                                            placeholder="Lĩnh vực kinh doanh khác"
                                            onChange={handleInputChangeBusinessAreas}
                                        />
                                        
                                    </Box>
                                :
                                    valueItem
                            }
                        </Box>
                    </>
                )
            case 'businessLicense':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <>
                                        <OutlinedInput
                                            required
                                            id="businessLicense"
                                            name="businessLicense"
                                            type="file"
                                            placeholder="Tải lên (Tối đa 5mb)"
                                            inputProps={{ accept: "application/pdf" }}
                                            onChange={handleInputChangeFile}
                                        />
                                        <a download="Giấy phép đăng ký kinh doanh" href={valueItem} title='Giấy phép đăng ký kinh doanh'>Chi tiết</a>
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </>
                                :
                                    <a download="Giấy phép đăng ký kinh doanh" href={valueItem} title='Giấy phép đăng ký kinh doanh'>Chi tiết</a>
                            }
                        </Box>
                    </>
                )
            case 'whitepaper':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <>
                                        <OutlinedInput
                                            required
                                            id="businessLicense"
                                            name="businessLicense"
                                            type="file"
                                            placeholder="Tải lên (Tối đa 5mb)"
                                            inputProps={{ accept: "application/pdf" }}
                                            onChange={handleInputChangeFileWhitepaper}
                                        />
                                        <a download="Whitepaper" href={valueItem} title='Whitepaper'>Chi tiết</a>
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </>
                                :
                                    <a download="Whitepaper" href={valueItem} title='Whitepaper'>Chi tiết</a>
                            }
                        </Box>
                    </>
                )
            case 'logo':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <>
                                        <ImageUploading
                                            value={imageLogo}
                                            onChange={onChangeImageUpload}
                                            dataURLKey="data_url"
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageUpdate,
                                                dragProps
                                            }) => (
                                                <>  
                                                    {!imageList.length &&
                                                        <div
                                                            onClick={onImageUpload}
                                                            {...dragProps}
                                                        >
                                                            <BoxImageUpload aria-label="upload picture" component="span">
                                                                <img src={valueItem} alt="img" width="20px" height="20px" />
                                                            </BoxImageUpload>
                                                        </div>
                                                    }
                                                    {imageList?.map((image, index) => (
                                                        <BoxImageUpload key={index} className="image-item" onClick={() => onImageUpdate(index)}>
                                                            <img src={image['data_url']} alt="" width="100" />
                                                        </BoxImageUpload>
                                                    ))}
                                                </>
                                            )}
                                        </ImageUploading>
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </>
                                :
                                    <BoxImageUpload>
                                        <img src={valueItem} alt="img" width="20px" height="20px" />
                                    </BoxImageUpload>
                            }
                        </Box>
                    </>
                )
            case 'identity':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }}>
                                        <Box sx={{ display: "flex", flexDirection: "row", '& > .MuiOutlinedInput-root': { border: '1px solid #58667E', borderRadius: '8px' }, '& .MuiSelect-select': { borderRadius: '8px' } }}>
                                            <Select sx={{ maxWidth: "140px", width: "100%", marginRight: "12px" }}
                                                labelId="idType"
                                                name="idType"
                                                id="idType"
                                                value={project.legalRepresentative.identity.idType}
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
                                                value={project.legalRepresentative.identity.id}
                                                onChange={handleInputIdentityChange}
                                            />
                                            <Box sx={boxFlag}>
                                                <Tooltip title={project.note.flags[item.key]}>
                                                    <img src="/assets/icons/flag.svg" />
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <FormLabel>Tải lên mặt trước</FormLabel>
                                            <OutlinedInput
                                                required
                                                id="frontIdImage"
                                                name="frontIdImage"
                                                type="file"
                                                placeholder="Tải lên (Tối đa 5mb)"
                                                inputProps={{accept:".png,.svg,.jpeg"}}
                                                onChange={handleInputFileIdentityChange}
                                            />
                                        </Box>
                                        {
                                            project.legalRepresentative.identity.idType !== idTypePassport &&
                                            <Box sx={{ display: 'block' }}>
                                                <FormLabel>Tải lên mặt sau</FormLabel>
                                                <OutlinedInput
                                                    required
                                                    id="backIdImage"
                                                    name="backIdImage"
                                                    type="file"
                                                    placeholder="Tải lên (Tối đa 5mb)"
                                                    inputProps={{accept:".png,.svg,.jpeg"}}
                                                    onChange={handleInputFileIdentityChange}
                                                />
                                            </Box>
                                        }
                                        
                                    </Box>
                                :
                                    valueItem
                            }
                        </Box>
                    </>
                )
            case 'description':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Flex>
                                        <TextareaAutosize
                                            required
                                            minRows={8}
                                            maxRows={8}
                                            name="description"
                                            placeholder="Mô tả dự án ngắn gọn."
                                            style={{ width: "100%", fontFamily: 'Inter', border: "1px solid #58667E", borderRadius: "8px" }}
                                            value={project[item.key]}
                                            onChange={handleInputChange}
                                            className="textarea-required"
                                        />
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                :
                                valueItem
                            }
                        </Box>
                    </>
                )
            case 'developmentTeam':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Flex>
                                        <DevelopmentTeam defaultValues={project} view={false} setFormValuesProject={setFormValuesProject} />
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                :
                                    <DevelopmentTeam defaultValues={project} view={true} setFormValuesProject={setFormValuesProject} />
                            }
                        </Box>
                    </>
                )
            case 'developmentPartner':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Flex>
                                        <DevelopmentPartner defaultValues={project} view={false} setFormValuesProject={setFormValuesProject} />
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                :
                                    <DevelopmentPartner defaultValues={project} view={true} setFormValuesProject={setFormValuesProject} />
                            }
                        </Box>
                    </>
                )
            case 'tokenAllocations':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Flex>
                                        <TokenAllocationRate view={false} defaultValues={project} setFormValuesProject={setFormValuesProject} />
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                :
                                    <TokenAllocationRate defaultValues={project} view={true} setFormValuesProject={setFormValuesProject} />
                            }
                        </Box>
                    </>
                )
            case 'websites':
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <>
                                        {
                                            project[item.key].map((entry, index) => (
                                                <Flex key={index}>
                                                    <InputEdit
                                                        id={`websites${index}`}
                                                        name={`websites${index}`}
                                                        type="text"
                                                        value={entry}
                                                        onChange={handleInputWebsiteChange}
                                                    />
                                                    {
                                                        index === 0 && 
                                                        <Box sx={boxFlag}>
                                                            <Tooltip title={project.note.flags[item.key]}>
                                                                <img src="/assets/icons/flag.svg" />
                                                            </Tooltip>
                                                        </Box>
                                                    }
                                                </Flex>
                                                )
                                            )
                                            
                                        }
                                    
                                    </>
                                :
                                valueItem
                            }
                        </Box>
                    </>
                )
            case 'socialWebs':
                return (
                    <>
                        {
                            project && project[item.key].map((entry, index) => (
                                <Box key={index} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Typography sx={labelInforItem}>{entry.name}</Typography>
                                    <Box sx={wrapperBoxValue}>
                                        {
                                            (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                                <Box sx={{ display: "flex", flexDirection: "row", position: "relative" }}>
                                                    <Box sx={{ display: "flex", position: "relative" }} mb={2} className="box-select-social">
                                                        <Select sx={{ width: "159px", borderRadius: "8px 0px 0px 8px", background: "#EFF2F5", "& .MuiSelect-select > img": { display: 'none'} }}
                                                            value={entry.name}
                                                            name={`websocial-${index}`}
                                                            // onChange={handleChangeSelectSocial}
                                                            input={<OutlinedInput label="Tag" />}
                                                            className="social-items"
                                                        >
                                                            {socialsListConstant.map((item, index0) => (
                                                                <MenuItem key={index0} className="social-item" key={item.name} value={item.value}>
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
                                                            value={entry.link}
                                                            // onChange={handleInputChangeSocial}
                                                        />
                                                    </Box>
                                                </Box>
                                            :
                                                entry.link
                                        }
                                    </Box>
                                </Box>
                            ))
                        }
                    </>
                )
            default:
                return (
                    <>
                        <Typography sx={labelInforItem}>{item.title}</Typography>
                        <Box sx={wrapperBoxValue}>
                            {
                                (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                    <Flex>
                                        {
                                            ['acceptDate', 'dob'].includes(item.key) ?
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                {
                                                    item?.key === 'acceptDate' ?
                                                            <DesktopDatePicker
                                                            inputFormat="dd/MM/yyyy"
                                                            value={project?.[item.key]}
                                                            onChange={handleAcceptDateChange}
                                                            renderInput={(params) => <TextField sx={styleDatePicker} {...params} />}
                                                        />
                                                    :
                                                        <DesktopDatePicker
                                                            inputFormat="dd/MM/yyyy"
                                                            value={project?.legalRepresentative[item.key]}
                                                            onChange={handleDobChange}
                                                            renderInput={(params) => <TextField sx={styleDatePicker} {...params} />}
                                                        />
                                                }
                                                
                                            </LocalizationProvider>
                                            :
                                                <InputEdit
                                                    id={item.key}
                                                    name={item.key}
                                                    type="text"
                                                    value={project[item.key] || project?.[item.key] || project?.legalRepresentative[item.key]}
                                                    onChange={handleInputChange}
                                                />
                                        }
                                        <Box sx={boxFlag}>
                                            <Tooltip title={project.note.flags[item.key]}>
                                                <img src="/assets/icons/flag.svg" />
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                :
                                valueItem
                            }
                        </Box>
                    </>
                )
        }
    }

    return (
        <>
            <ButtonUpdate onClick={handleUpdateData}>Cập nhật</ButtonUpdate>
            {
                listTitle.map(entry => (
                    <Box key={entry.title} sx={{marginBottom: "24px"}}>
                        <Typography sx={{ textAlign: "left !important", marginBottom: "12px" }} className="tab-title">
                            {entry.title}
                        </Typography>
                        <Box>
                            <Box sx={wrapInfo}>
                            {
                                entry.listContent.map(item => (
                                    <Box key={item.title} sx={inforItem} className="form-control">
                                        {renderItem({item})}
                                    </Box>
                                ))
                            }
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </>
        
    )
}

const Flex = styled(Box)`
    display: flex;
    align-items: center;
`

const InputEdit = styled(OutlinedInput)`
   border: 1px solid #58667E;
`

const BoxImageUpload = styled(Box)`
    width: 30px;
    height: 30px;
    & img {
        max-width: 100%;
        height: auto;
    }
`;

const BoxImageUploadPreview = styled(Box)`
    width: 30px;
    height: 30px;
    & img {
        max-width: 100%;
        height: auto;
    }
`;

const ButtonUpdate = styled(Button)`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    width: 100%;
    padding: 12px;
    background: #446DFF;
    border-radius: 8px;
    box-shadow: none;
    margin-top: auto;
    text-transform: inherit;
    width: 200px;
    margin-bottom: 20px;
    &:hover {
        color: #FFFFFF;
        background: #446DFF;
    }
`;

export default Information