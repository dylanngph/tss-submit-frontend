import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';

function NFTMainScreen({ match }) {
    const ListStampNFT = [
        {
            img_path: '/assets/images/stampNFT/NFT1.png',
            name: 'Passport of Blockchain',
            des: 'Hồ sơ dự án Blockchain',
            release: true,
            link: '/stamp-nft/passport-of-blockchain',
        },
        {
            img_path: '/assets/images/stampNFT/NFT2.png',
            name: 'Tài sản số',
            des: 'Sắp ra mắt',
            release: false,
            link: '/stamp-nft/comingsoon',
        },
        {
            img_path: '/assets/images/stampNFT/NFT3.png',
            name: 'Tài sản nền',
            des: 'Sắp ra mắt',
            release: false,
            link: '/stamp-nft/comingsoon',
        }
    ]
    return (
        <div>
            <BreadcrumbsWrapper aria-label="breadcrumb">
                <Link
                    to="/stamp-nft"
                >
                    CON DẤU NFT
                </Link>
            </BreadcrumbsWrapper>
            <Box sx={{ padding: '36px 24px' }}>
                <Box sx={{
                    color: '#58667E',
                    lineHeight: 1.5,
                    fontWeight: 'normal',
                    fontSize: '16px',
                    paddingBottom: '50px'
                }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar vestibulum id a pellentesque lacus lacus, pulvinar pretium velit. Pulvinar aliquam, feugiat vitae, mauris ut et ac velit malesuada. Orci sodales quam mattis proin arcu nunc sit. Fames sit mauris fringilla nunc vitae cursus tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar vestibulum id a pellentesque lacus lacus, pulvinar pretium velit. Pulvinar aliquam, feugiat vitae, mauris ut et ac velit malesuada. Orci sodales quam mattis proin arcu nunc sit. Fames sit mauris fringilla nunc vitae cursus tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar vestibulum id a pellentesque lacus lacus, pulvinar pretium velit. Pulvinar aliquam, feugiat vitae, mauris ut et ac velit malesuada. Orci sodales quam mattis proin arcu nunc sit. Fames sit mauris fringilla nunc vitae cursus tellus.Lorem ipsum dolor</p>
                </Box>
                <Grid container spacing={2}>
                    {ListStampNFT.map((item, index) => (
                        <Grid item xs={12} sm={4}>
                            <BoxNFT>
                                <img src={item.img_path} alt={item.name} />
                                <h4>{item.name}</h4>
                                <Box sx={{ marginBottom: '24px' }}>{item.des}</Box>
                                <Link
                                    to={item.link}
                                    className={item.release ? 'release' : 'comingsoon'}
                                    >
                                    {item.release ? 'Chi tiết' : 'Sắp ra mắt'}
                                </Link>
                            </BoxNFT>
                        </Grid>
                    ))}

                </Grid>
            </Box>
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
`;

const BoxNFT  = styled(Box)`
    padding: 24px;
    background-color: #EFF2F5;
    border-radius: 16px;
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    color: #58667E;
    border: 1px solid transparent;
    &:hover {
        background-color: #ffffff;
        border-color: #446DFF;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 0 auto 24px;
    }
    h4 {
        color: #11142D;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        margin: 0 0 5px;
    }
    a {
        padding: 12px 24px;
        font-size: 16px;
        line-height: 19px;
        background: #446DFF;
        border-radius: 8px;
        &.release {
            background: #446DFF;
            color: #FFFFFF;
        }
        &.comingsoon {
            background: #E0E5EB;
            color: #A6B0C3;
            pointer-events: none;
        }
    }
`;

export default NFTMainScreen;