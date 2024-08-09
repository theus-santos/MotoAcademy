const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())

const users = [
    {id: 1, name: "Matheus"},
    {id: 2, name: "Gabriel"},
]

app.get('/', (req, res)=> {
    res.status(200).json(users  );
})

app.post('/usuarios', (req, res)=> {
    const name = req.body.name;
    const id = users.length + 1;
    const newUser = {id, name};

    users.push(newUser);
    res.status(201).json(users);
})

app.delete('/usuarios/:id', (req, res)=> {
    const id = req.params;


    res.status(200).json(users);  
})

app.listen(port, ()=> {
    console.log(`App rodando na porta ${port}`);
})