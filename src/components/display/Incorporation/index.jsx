import React, { useState } from "react";
import { Box, Autocomplete, FormControl, FormLabel, OutlinedInput, TextField, FormHelperText } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function Incorporation(props) {
    const { projectItem, children, value, index, ...other } = props;
    

    let businessAreas = [
        {
            value: 1,
            area: "Thời trang, mỹ phẩm, chăm sóc sức khỏe",
        },
        {
            value: 2,
            area: "Máy tính, điện thoại, thiết bị văn phòng",
        },
        {
            value: 3,
            area: "Sách, văn phòng phẩm",
        },
        {
            value: 4,
            area: "Thiết bị nội thất, ngoại thất",
        },
        {
            value: 5,
            area: "Hàng điện tử, điện lạnh, đồ gia dụng",
        },
        {
            value: 6,
            area: "Hoa, quà tặng, đồ chơi",
        },
        {
            value: 7,
            area: "Bất động sản",
        },
        {
            value: 8,
            area: "Dịch vụ lưu trú và du lịch",
        },
        {
            value: 9,
            area: "Thực phẩm, đồ uống",
        },
        {
            value: 10,
            area: "Dịch vụ việc làm",
        },
        {
            value: 11,
            area: "Ôtô, xe máy, xe đạp",
        },
        {
            value: 12,
            area: "Công nghiệp, xây dựng",
        },
        {
            value: 13,
            area: "Dịch vụ khác",
        },
        {
            value: 14,
            area: "Hàng hóa khác",
        },
        {
            value: 15,
            area: "Dịch vụ phần mềm, thiết kế website",
        },
        {
            value: 16,
            area: "Dịch vụ đăng ký tên miền, hosting",
        },
        {
            value: 17,
            area: "Dịch vụ thẻ",
        },
        {
            value: 18,
            area: "Dịch vụ trung gian thanh toán",
        },
        {
            value: 19,
            area: "Đại lý vé máy bay, tàu, xe",
        },
        {
            value: 20,
            area: "Mẹ và bé",
        },
        {
            value: 21,
            area: "Dịch vụ truyền thông, quảng cáo, sự kiện",
        },
        {
            value: 22,
            area: "Dịch vụ vận chuyển, giao nhận",
        },
        {
            value: 23,
            area: "Dịch vụ nội dung số",
        },
        {
            value: 24,
            area: "Dịch vụ đào tạo trực tuyến",
        },
        {
            value: 25,
            area: "Điện thoại, máy tính bảng",
        },
        {
            value: 26,
            area: "Điện gia dụng - điện máy",
        },
        {
            value: 27,
            area: "Máy tính -  Laptop",
        },
        {
            value: 28,
            area: "Thiết bị số - Phụ kiện (Bao gồm phụ kiện số, phụ kiện công nghệ…)",
        },
        {
            value: 29,
            area: "Tivi, Máy ảnh, máy quay, âm thanh",
        },
        {
            value: 30,
            area: "Nhà cửa - đời sống (Bao gồm đồ gia dụng, tạp hóa…)",
        },
        {
            value: 31,
            area: "Làm đẹp - Sức khỏe",
        },
        {
            value: 32,
            area: "Thực phẩm - thực phẩm chức năng (Bao gồm thực phẩm tiêu dùng)",
        },
        {
            value: 33,
            area: "Thời trang - Phụ kiện (Bao gồm đồng hồ, Quần áo, giầy dép, túi ví,…)",
        },
        {
            value: 34,
            area: "Ô tô - Xe máy - Xe đạp & Phụ kiện (Bao gồm: Định vị, Pin, đồ độ xe, camera hành trình…)",
        },
        {
            value: 35,
            area: "Thể thao - Dã  ngoại - Du lịch",
        },
        {
            value: 36,
            area: "Sách - VPP - Quà tặng",
        },
        {
            value: 37,
            area: "Phiếu mua hàng, phiếu sử dụng dịch vụ",
        },
        {
            value: 38,
            area: "Thẻ khách hàng thường xuyên",
        },
        {
            value: 39,
            area: "Sản phẩm khác",
        },
        {
            value: 40,
            area: "Dịch vụ vé máy bay, đặt chỗ",
        },
        {
            value: 41,
            area: "Dịch vụ Lưu trú và Du lịch",
        },
        {
            value: 42,
            area: "Dịch vụ ăn uống, ẩm thực",
        },
        {
            value: 43,
            area: "Dịch vụ giao hàng, chuyển phát",
        },
        {
            value: 44,
            area: "Dịch vụ vận tải bằng xe công nghệ",
        },
        {
            value: 45,
            area: "Dịch vụ môi giới việc làm",
        },
        {
            value: 46,
            area: "Dịch vụ đào tạo, tư vấn du học",
        },
        {
            value: 47,
            area: "Dịch vụ tên miền, hosting",
        },
        {
            value: 48,
            area: "Dịch vụ quảng cáo trực tuyến",
        },
        {
            value: 49,
            area: "Dịch vụ quảng cáo, tổ chức sự kiện",
        },
        {
            value: 50,
            area: "Dịch vụ chăm sóc sắc đẹp",
        },
        {
            value: 51,
            area: "Dịch vụ y tế, chăm sóc sức khỏe",
        },
        {
            value: 52,
            area: "Dịch vụ vận tải, logistics",
        },
        {
            value: 53,
            area: "Dịch vụ môi giới, mua hộ",
        },
        {
            value: 54,
            area: "Dịch vụ nạp thẻ (Bao gồm thẻ điện thoại, thẻ games,…)",
        },
        {
            value: 55,
            area: "Dịch vụ tư vấn tài chính, kế toán, thuế",
        },
        {
            value: 56,
            area: "Dịch vụ tư vấn hồ sơ, pháp lý",
        },
        {
            value: 57,
            area: "Dịch vụ sửa chữa, bảo trì, lắp đặt",
        },
        {
            value: 58,
            area: "Dịch vụ tư vấn, thiết kế xây dựng, kiến trúc",
        },
        {
            value: 59,
            area: "Dịch vụ vệ sinh, môi trường",
        },
        {
            value: 60,
            area: "Dịch vụ xuất, nhập khẩu",
        },
        {
            value: 61,
            area: "Dịch vụ Công nghệ thông tin",
        },
        {
            value: 62,
            area: "Dịch vụ viễn thông - giải trí & giá trị gia tăng",
        },
        {
            value: 63,
            area: "Dịch vụ cho thuê",
        },
        {
            value: 64,
            area: "Dịch vụ phân phối  & Nhượng quyền",
        },
        {
            value: 65,
            area: "Dịch vụ bảo hiểm - ngân hàng - tài chính",
        },

    ]

    // const defaultValues = {
    //     incorporationName: "",
    //     incorporationAddress: "",
    //     transactionName: "",
    //     transactionAddress: "",
    //     businessAreas: [],
    //     companyCode: "",
    //     taxCode: "",
    //     acceptDate: null,
    //     businessLicense: "",
    // };

    const [formValues, setFormValues] = useState(projectItem);
    const [validator, setValidator] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        props.setProjectItemStep(1, formValues);
        validate(e);
    };

    const handleInputChangeFile = (e) => {
        setFormValues({
            ...formValues,
            ["businessLicense"]: e.target.files[0],
        });
        props.setProjectItemStep(1, formValues);
        checkDataActiveButton();
    };

    

    const handleAutocompleteChange = (event, newValue) => {
        setFormValues({
            ...formValues,
            ['businessAreas']: newValue,
        });
        props.setProjectItemStep(1, formValues);
        setValidator({
            ...validator,
            ['businessAreas']: newValue.length > 0 ? false : true,
        });
        checkDataActiveButton();
        if (!newValue.length) props.setStateNextButton(false)
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        setValidator({
            ...validator,
            [name]: value ? false : true,
        });
        checkDataActiveButton();
    };

    const handleInputAutocompleteBlur = () => {
        setValidator({
            ...validator,
            ['businessAreas']: formValues.businessAreas.length ? false : true,
        });
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
        if (formValues.incorporationName &&
            formValues.incorporationAddress &&
            formValues.businessAreas.length &&
            formValues.companyCode &&
            !formValues.businessLicense &&
            formValues.acceptDate
            ) {
                props.setStateNextButton(true)
            }
        else
            props.setStateNextButton(false)
    };

    const handleDatePickerChange = (newValue) => {
        setFormValues({
            ...formValues,
            ["acceptDate"]: newValue,
        });
        props.setProjectItemStep(1, formValues);
        checkDataActiveButton();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const autocomplete = {
        border: '1px solid #EFF2F5',
        background: '#EFF2F5',
        borderRadius: '8px',
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
                            error={validator.incorporationName}
                        />
                        {
                            validator.incorporationName &&
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
                            error={validator.incorporationAddress}
                        />
                        {
                            validator.incorporationAddress &&
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
                            defaultValue={formValues.businessAreas}
                            getOptionLabel={(businessAreas) => businessAreas.area}
                            isOptionEqualToValue={(option, value) => option.area === value.area}
                            onChange={handleAutocompleteChange}
                            onBlur={handleInputAutocompleteBlur}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    error={validator.businessAreas}
                                    placeholder="Lĩnh vực kinh doanh"
                                />
                            )}
                        />
                        {
                            validator.businessAreas &&
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
                            error={validator.companyCode}
                        />
                        {
                            validator.companyCode &&
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
                            inputProps={{accept:"application/pdf"}}
                            // value={businessLicense}
                            onChange={handleInputChangeFile}
                            // onBlur={handleInputBlur}
                            error={validator.businessLicense}
                        />
                        {
                            validator.businessLicense &&
                            <FormHelperText error>Giấy phép đăng ký kinh doanh chưa được chọn</FormHelperText>
                        }
                    </FormControl>
                </form>
            )}
        </Box>
    );
}

export default Incorporation;