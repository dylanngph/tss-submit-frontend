import { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, OutlinedInput, TextField, Autocomplete, Checkbox, FormHelperText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TokenAllocationRate from 'components/custom/TokenAllocationRate'

function Tokenomics(props) {
    const { projectItem, children, value, index, ...other } = props;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    let communications = [
        {
            value: "1",
            name: "Binance Smart Chain",
        },
        {
            value: "2",
            name: "Ethereum",
        },
        {
            value: "3",
            name: "Kardian",
        },
    ]

    let standards = [
        {
            value: "1",
            name: "ERC20",
        },
        {
            value: "2",
            name: "BEP20",
        },
        {
            value: "3",
            name: "KRC20",
        },
    ]


    const [formValues, setFormValues] = useState(projectItem);
    const [validator, setValidator] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        validate(e);
    };

    const handleInputBlur = (e) => {
        validate(e);
    };

    const handleAutocompleteChangeCommunications = (e, newValue) => {
        let arrTmp = formValues;
        arrTmp.communications = newValue;
        setFormValues(arrTmp);
        checkDataActiveButton();
    };

    const handleAutocompleteChangeStandards = (e, newValue) => {
        let arrTmp = formValues;
        arrTmp.standards = newValue
        setFormValues(arrTmp);
        checkDataActiveButton();
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

    const checkDataActiveButton = () => {
        if (formValues.tokenName &&
            formValues.symbol) {
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
                    <FormControl className="form-control mb-16" sx={{
                        width: "48%",
                        marginRight: "15px",
                    }}>
                        <FormLabel>Tên gọi Token</FormLabel>
                        <OutlinedInput
                            required
                            id="tokenName"
                            name="tokenName"
                            type="text"
                            placeholder="Tên gọi Token"
                            value={formValues.tokenName}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.tokenName}
                        />
                        {
                            validator.tokenName &&
                            <FormHelperText error>Tên Token không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16" sx={{
                        width: "48%",
                    }}>
                        <FormLabel>Ký hiệu</FormLabel>
                        <OutlinedInput
                            required
                            id="symbol"
                            name="symbol"
                            type="text"
                            placeholder="BIT, JDT..."
                            inputProps={{ maxLength: 10 }}
                            value={formValues.symbol}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            error={validator.symbol}
                        />
                        {
                            validator.symbol &&
                            <FormHelperText error>Ký hiệu không được để trống</FormHelperText>
                        }
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Nền tảng (Không bắt buộc)</FormLabel>
                        <Autocomplete sx={{
                            background: "#EFF2F5",
                            borderRadius: "8px",
                            width: "100% !important"
                        }}
                            multiple
                            id="communication"
                            options={communications}
                            defaultValue={formValues.communications}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            onChange={handleAutocompleteChangeCommunications}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Nền tảng" />
                            )}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Tiêu chuẩn (Không bắt buộc)</FormLabel>
                        <Autocomplete sx={{
                            background: "#EFF2F5",
                            borderRadius: "8px",
                            width: "100% !important"
                        }}
                            multiple
                            id="standard"
                            name="standard"
                            options={standards}
                            defaultValue={formValues.standards}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            onChange={handleAutocompleteChangeStandards}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="Tiêu chuẩn" />
                            )}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Địa chỉ Smart Contract (Không bắt buộc)</FormLabel>
                        <OutlinedInput
                            id="smartContractAddress"
                            name="smartContractAddress"
                            type="text"
                            placeholder="0x00000000"
                            value={formValues.smartContractAddress}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl className="form-control mb-16">
                        <FormLabel>Phân bổ token</FormLabel>
                        <TokenAllocationRate />
                    </FormControl>
                </form>
            )}
        </Box>
    );
}

export default Tokenomics;