import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const CustomBox = styled(Box)(({ theme }) => ({
    width: '100vw',
    height: '100vh',
}));

const Layout: React.FC<Props> = ({ children }) => {
    return <CustomBox>{children}</CustomBox>;
};

export default Layout; 