import express, { Request, Response } from 'express';

const server = express();

server.get('/', (resquest: Request, response: Response) => {
    return response.json({message: 'Bem vindo a minha API'})
});

server.listen(5000, () => {
    console.log(`Servidor rodando na porta localhost:5000/`)
});