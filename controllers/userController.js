const { sequelize, Sequelize } = require('../models/index.js');
const Users = require('../models/users.js')(sequelize, Sequelize.DataTypes); 

var addUser = async (req, resp) => {
    try {
            let info = {
                user_name: req.body.username,
                email: req.body.email,
                password: req.body.password,
            };
    
            const newUser = await Users.create(info);
            resp.status(200).send(newUser);
            console.log(newUser);
        } catch (e) {
            console.log(e.message);
            resp.status(500).send({ message: "Error while creating user", error: e.message });
        }
};

var getUser = async (req, resp) => {
    try {
        let id = req.params.id;
        let users = await Users.findOne({
            where: { user_id: id}
        });
        resp.status(200).send(users);
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while fetching user", error: e.message });
    }
};

var getAllUsers = async (req, resp) => {
    try {
        let users = await Users.findAll({});
        resp.status(200).send(users);
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while fetching users", error: e.message });
    }
};

var updateUser = async (req, resp) => {
    try {
        const { id } = req.params;
        const updatedUser = await Users.update(req.body, { where: { user_id: id } });
        if (updatedUser[0] === 1) {
            resp.status(200).send({ message: "User updated successfully "});
        } else {
            resp.status(404).send({ message: "User not found or no changes made" });
        }
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while updating user", error: e.message });
    }
};

var deleteUser = async (req, resp) => {
    try {
        const { id } = req.params;
        await Users.destroy({ where: { user_id: id } });
        resp.status(200).send("User deleted successfully");
    } catch (e) {
        console.log(e.message);
        resp.status(500).send({ message: "Error while deleting user", error: e.message });
    }
};

module.exports = {
    addUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
};
