import React, { useState } from 'react';
import { Button, FormControl, TextField, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RouteComponentProps } from 'react-router-dom';

interface ChildComponentProps extends RouteComponentProps<any> {
    
}

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'start'
}));

const UserSearch: React.FC<ChildComponentProps> = ({ history }) => {
    const [userId, setUserId] = useState<string>('');

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        history.push(`/accounts/${userId}`)
    }; 

    return (
        <Container sx={{ width: '100vw', height: '100vh', paddingTop: 40 }} maxWidth="md">
            <Typography color="secondary" variant="h3" sx={{ marginBottom: 10 }}>User search</Typography>
            <CustomFormControl>
                <TextField
                    color="secondary"
                    type="number"
                    value={userId}
                    onChange={e => setUserId(e.target.value)} 
                    sx={{ width: 400, marginRight: 7, }} 
                    id="user-id" 
                    label="UserId" 
                    inputProps={{ "data-testid": "input-element" }}
                    variant="outlined"/>
                <Button disabled={!userId} color="secondary" onClick={e => onSubmitHandler(e)} type="submit" variant="outlined" sx={{ padding: '5px 20px' }}>Click</Button>
            </CustomFormControl>
        </Container>  
    )   
};
 
export default UserSearch;