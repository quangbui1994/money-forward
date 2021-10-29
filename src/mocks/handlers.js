import { rest } from 'msw';

const mockData = [
    {attributes: {id: 1, user_id: 1, name: 'HKS', balance: 20 }},
    {attributes: {id: 2, user_id: 2, name: 'ABS', balance: 40 }},
    {attributes: {id: 3, user_id: 1, name: 'KOP', balance: 20 }},
]

export const handlers = [
    rest.get('https://sample-accounts-api.herokuapp.com/users/:id/accounts', (req, res, ctx) => {
        const { id } = req.params;
        const accounts = mockData.filter(element => element.attributes.user_id === +id);
        return res(
            ctx.json(accounts)
        )
    })
];   