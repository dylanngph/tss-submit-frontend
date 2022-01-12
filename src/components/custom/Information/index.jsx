import { useState } from "react";
import { Box, FormControl, OutlinedInput, Typography, Tooltip } from '@mui/material';
import { listTitle } from './config';
import styled from '@emotion/styled'

const Information = (props) => {
    const [project, setProject] = useState(props.project);
    const [fieldUpdate, setFieldUpdate] = useState({});
    const [stateEditInput, setStateEditInput] = useState({});

    const inforItem = {
        display: "flex",
        flexDirection: "revert",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #A6B0C3",
        padding: '15px 0',

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

    const showEditInput = (key) => {
        setStateEditInput({
            ...stateEditInput,
            [key]: true,
        })
        console.log('>> stateEditInput: ', stateEditInput);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value,
        });

        console.log('project edit==>', project);
    };

    console.log('>> project ', project);

    // const [onEdit, setOnEdit] = useState(false)

    const renderItem = ({item}) => {
        let valueItem;
         
        if (project?.detail) {
            // get from api
            switch (item.key) {
                case 'incorporationName':
                case 'incorporationAddress':
                case 'transactionName':
                case 'companyCode':
                case 'acceptDate':
                    valueItem = project?.detail[item.key];
                    break;
                case 'businessAreas':
                    valueItem = project?.detail[item.key].join("; ");
                    break;
                case 'communications':
                case 'standards':
                case 'websites':
                    valueItem = project[item.key].join(", ");
                    break;
                case 'name':
                case 'dob':
                case 'position':
                case 'address':
                case 'phone':
                case 'email':
                    valueItem = project?.detail.legalRepresentative[item.key];
                    break;
                case 'identity':
                    valueItem = project?.detail.legalRepresentative[item.key].id ? project?.detail.legalRepresentative[item.key].id.substring(0, 3) + '******' : '*********';
                    break;
                case 'logo':
                    valueItem = `data:image/png;base64,${project[item.key]}`;
                    break;
                case 'whitepaper':
                    valueItem = `data:application/pdf;base64,${project[item.key]}`;
                    break;
                case 'smartContractAddress':
                    valueItem = project.smartContractAddress.substring(0, 8) + "..." + project.smartContractAddress.substring(project.smartContractAddress.length - 4, project.smartContractAddress.length);
                    break;
                case 'businessLicense':
                    valueItem = `data:application/pdf;base64,${project?.detail[item.key]}`;
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

        if (['businessLicense', 'whitepaper'].includes(item.key)) {
            return (
                <>
                    <Typography sx={labelInforItem}>{item.title}</Typography>
                    <Box sx={wrapperBoxValue}>
                        <a download="Download" href={valueItem} title='Giấy phép đăng ký kinh doanh'>Chi tiết</a>
                        {
                            (project && project.note && project.note.flags && project.note.flags[item.key]) &&
                            <Box sx={boxFlag}>
                                <Tooltip title={project.note.flags[item.key]}>
                                    <img src="/assets/icons/flag.svg" />
                                </Tooltip>
                            </Box>
                        }
                    </Box>
                </>
            )
        } else if (['logo'].includes(item.key)) {
            return (
                <>
                    <Typography sx={labelInforItem}>{item.title}</Typography>
                    <Box sx={wrapperBoxValue}>
                        <img src={valueItem} alt="img" width="20px" height="20px" />
                        {
                            (project && project.note && project.note.flags && project.note.flags[item.key]) &&
                            <Box sx={boxFlag}>
                                <Tooltip title={project.note.flags[item.key]}>
                                    <img src="/assets/icons/flag.svg" />
                                </Tooltip>
                            </Box>
                        }
                    </Box>
                </>
            )
        } else {
            return (
                <>
                    <Typography sx={labelInforItem}>{item.title}</Typography>
                    <Box sx={wrapperBoxValue}>
                        {
                            (project && project.note && project.note.flags && project.note.flags[item.key]) ?
                                <Flex>
                                    <InputEdit
                                        id={[item.key]}
                                        name={[item.key]}
                                        type="text"
                                        value={project[item.key] || project?.detail[item.key]}
                                        onChange={handleInputChange}
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
        }
    }

    return (
        <>
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
                                    <FormControl key={item.title} sx={inforItem} className="form-control">
                                        {renderItem({item})}
                                    </FormControl>
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

export default Information