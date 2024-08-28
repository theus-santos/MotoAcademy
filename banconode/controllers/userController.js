const userService = require("../services/userService")

async function getUsers(req, res) {
    try {
       const users = await userService.getUsers();
       res.status(201).send(users); 
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createUser(req, res) {
    const {nome, idade, email, senha} = req.body;

    try {
        await userService.createUser(nome, idade, email, senha)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro ao criar usuário"})
    }
}

async function updateUser(req, res) {
    const {id} = req.params;
    const {nome} = req.body;

    try {
        await userService.updateUser(id, nome);
        res.status(200).json({message: "Usuario alterado com sucesso!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro ao atualizar usuário"})
    }
}

async function deleteUser(req, res) {
    const {id} = req.params;

    try {
        await userService.deleteUser(id);
        res.status(204).json({message: "Usuario removido com sucesso!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Erro ao remover o usuário"})
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};