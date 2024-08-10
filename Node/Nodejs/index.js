const express = require('express');
const app = express();
const port = 8000;

app.use(express.json())

let users = [
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

app.put('/usuarios/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex != -1) {
        users[userIndex].name = name;
        res.json(users[userIndex])
    } else {
        res.status(400).json({message: 'Usuário não encontrado!'})
    }
})

app.delete('/usuarios/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    // users = users.filter(user => user.id !== id);
    if (userIndex < 0) {
        res.status(400).json({message: 'Usuário não encontrado!'})
        return;
    } 
    users.splice(userIndex, 1);
    res.status(204).json({message: "Usuário deletado!", users});  
})

app.listen(port, ()=> {
    console.log(`App rodando na porta ${port}`);
})