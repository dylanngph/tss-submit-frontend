import React, {useState, useEffect} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'
import { useAppDispatch, useAppSelector } from 'app/hooks';

function NFTDetailScreen() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postBreadcrumb([
            {
                'label': 'Con dấu NFT',
            },
            {
                'label': 'Passport of Blockchain',
            },
        ]))
    }, [])

    return (
        <div>
            <NFTCard>
                <Grid container alignItems="center">
                    <Grid item mr={2} mb={2}>
                        <Box sx={{
                            width: '78px',
                            height: '78px',
                        }}>
                            <img className="fluid" src="/assets/images/stampNFT/NFT1.png" alt="logo-tss.png"/>
                        </Box>
                    </Grid>
                    <Grid item>
                        <h2>NFT Passport of Blockchain</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <BoxImage>
                        <img src="/assets/images/stampNFT/logo-tss.png" alt="logo-tss.png"/>
                    </BoxImage>
                    <BoxImage>
                        <img src="/assets/images/stampNFT/logo-bas.png" alt="logo-bas.png"/>
                    </BoxImage>
                    <BoxImage>
                        <img src="/assets/images/stampNFT/logo-vcb.png" alt="logo-vcb.png"/>
                    </BoxImage>
                    <BoxMoreInfo>
                        <span>Ngày cấp</span>
                        <span>06/05/2022</span>
                    </BoxMoreInfo>
                    <BoxMoreInfo>
                        <span className="block-copy">NFT ID</span>
                        <span>153979</span>
                    </BoxMoreInfo>
                    <BoxMoreInfo>
                        <span className="block-copy">Contract ID</span>
                        <span>0xE1D7CB...647278</span>
                    </BoxMoreInfo>
                    <BoxMoreInfo>
                        <span className="block-copy">TX Hash</span>
                        <span>0xE1D7CB...647278</span>
                    </BoxMoreInfo>
                </Grid>
                <Grid container mt={0} spacing={2}>
                    <Grid item container lg={6} xs={12}>
                        <BoxMoreAnalytic>
                            <h5>Pháp lý</h5>
                            <span className="green">Rủi ro thấp</span>
                        </BoxMoreAnalytic>
                    </Grid>
                    <Grid item container lg={6} xs={12}>
                        <BoxMoreAnalytic>
                            <h5>Công nghệ</h5>
                            <span className="yellow">Có khả năng ứng dụng</span>
                        </BoxMoreAnalytic>
                    </Grid>
                    <Grid item container lg={6} xs={12}>
                        <BoxMoreAnalytic>
                            <h5>Giá trị xã hội </h5>
                            <span className="yellow">Có tiềm năng đóng góp cho xã hội</span>
                        </BoxMoreAnalytic>
                    </Grid>
                    <Grid item container lg={6} xs={12}>
                        <BoxMoreAnalytic>
                            <h5>Uy tín cộng đồng</h5>
                            <span className="red">Có một số thông tin tiêu cực</span>
                        </BoxMoreAnalytic>
                    </Grid>
                </Grid>
            </NFTCard>
        </div>
    );
}

const BreadcrumbsWrapper = styled(Breadcrumbs)`
    padding: 24px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    a {
        color: #11142D;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    }
    li {
        a {
            color: #A6B0C3;
        }
    }
    li.MuiBreadcrumbs-separator {
        color: #A6B0C3;
    }
`;

const NFTCard = styled.div`
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #EFF2F5;
    box-sizing: border-box;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    height: 100%;
    margin: 24px;
    img.fluid {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const BoxImage = styled(Box)`
    background-color: #EFF2F5;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 15px 15px 15px 0;
    display: flex;
    max-width: 80px;
    height: 40px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media screen and (max-width: 600px) {
        margin: 5px 10px 5px 0;
    }
`;

const BoxMoreInfo = styled(Box)`
    border-left: 1px solid #D4D4D5;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0;
    @media screen and (max-width: 600px) {
        margin: 10px 0;
    }
    .block-copy {
        position: relative;
        cursor: copy;
        min-width: 60px;
        &:after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background-image: url('/assets/icons/ico-copy.svg');
            margin-left: 3px;
        }
    }
    span:first-child {
        font-size: 14px;
        line-height: 17px;
        color: #58667E;
    }
    span:last-child {
        color: #11142D;
    }
`;

const BoxMoreAnalytic = styled.div`
    background: #EFF2F5;
    border-radius: 12px;
    padding: 15px;
    width: 100%;
    h5 {
        padding-left: 20px;
        position: relative;
        margin: 0 0 20px;
        font-size: 18px;
        line-height: 22px;
        color: #58667E;
        &:after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 2px;
            left: 0;
            background-image: url('/assets/icons/ico-info-circle.svg');
        }
    }
    span {
        padding-left: 24px;
        margin-bottom: 24px;
        line-height: 24px;
        display: block;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 16px;
            height: 24px;
            top: 0;
            left: 0;
            border-radius: 4px;
        }
        &.green:after{
            background: #16C784;
        }
        &.yellow:after{
            background: #EED344;
        }
        &.red:after{
            background: #EA3943;
        }
    }
`;

export default NFTDetailScreen;