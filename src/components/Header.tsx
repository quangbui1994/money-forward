import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: 70,
    display: 'flex',
    paddingLeft: theme.spacing(11),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
})); 

const Header: React.FC = () => {
    return (
        <CustomBox>
            <Typography sx={{ alignSelf: 'center' }} color="secondary" variant="h6">Account Management</Typography>
        </CustomBox>     
    )
};  

export default Header;  