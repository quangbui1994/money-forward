import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableContainer, TableRow, TableBody, TableHead, TableCell, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

interface Params {
    id: string
}

interface Account {
    id: string,
    name: string,
    balance: string
}

type result = {
    attributes: Account
}

const BASE_URL = 'https://sample-accounts-api.herokuapp.com/users';

const Account = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const { id } = useParams<Params>();

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const results = await (await fetch(`${BASE_URL}/${id}/accounts`)).json();
                const accounts = results.map((result: result) => result.attributes)
                setAccounts(accounts);
            } catch (error) {
                setAccounts([]);
            }
        };  

        fetchAccounts(); 
    }, [])

    return (
        <Container sx={{ width: '100vw', height: '100vh', paddingTop: 40 }} maxWidth="md">
            <Typography color="secondary" variant="h3" sx={{ marginBottom: 10 }}>User accounts</Typography>
            {accounts.length === 0 ? <Typography color="secondary" variant="h4">Could not find the user</Typography> : <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow> 
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Balance</TableCell>
                        </TableRow> 
                    </TableHead>  
                    <TableBody> 
                    {accounts.map((account) => (
                        <TableRow
                            key={account.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {account.id}
                            </TableCell>
                            <TableCell data-testid={`account-${account.name}`} align="left">{account.name}</TableCell>
                            <TableCell align="right">{account.balance}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table> 
            </TableContainer>}
        </Container>
    )
}; 

export default Account;