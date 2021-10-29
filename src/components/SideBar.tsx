import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: 200,
    height: `calc(100vh - 70px)`,
    position: 'absolute',
    top: 70,
    left: 0,
}));

const CustomListItem = styled('li')(({ theme }) => ({
    padding: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& a': {
        color: theme.palette.secondary.light,
        transition: 'all 0.3s ease',
    },
    '&:after': {
        content: `""`,
        display: 'block',
        position: 'absolute', 
        bottom: 0,
        left: '50%',
        height: 1,
        width: '70%',
        transform: 'translateX(-50%)',
        backgroundColor: theme.palette.secondary.light,
        transition: 'all 0.3s ease'
    },
    '&:hover': {
        '& a': {
            color: theme.palette.secondary.main
        },
        '&:after': {
            width: '100%',
            backgroundColor: theme.palette.secondary.main,
        }
    }, 
}))

const SideBar: React.FC = () => {
    return (
        <CustomBox>
            <CustomListItem>
                <Link to="/">Account Search</Link>
            </CustomListItem> 
        </CustomBox>
    ) 
};

export default SideBar;