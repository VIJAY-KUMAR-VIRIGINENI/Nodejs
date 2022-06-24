import { v4 as uuidv4 } from 'uuid';
import { validator } from '../validators/joivalidators.js';
import Joi from 'joi';
let users = [];

export const createUser = (req, res) => {
    const user = req.body;

    let result = validator(req.body);
    if (result.error) {
        res.status(400).send(result);
        return;
    }

    users.push({ ...user, id: uuidv4(), isDeleted: false });

    res.send(`user with name "${user.userName}" is added to the database`);
}

export const getUser = (req, res) => {
    console.log(users);
    res.send(users);//status 200

}
export const getUserWithId = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);//handle not found

}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].isDeleted = true;
            res.send(`user with id ${id} deleted from the database `);
            break;
        }
    }//handle

}
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { userName, password, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (userName) {//validate
        user.userName = userName;
    }
    if (password) {
        user.password = password;
    }
    if (age) {
        user.age = age;//validate
    }
    res.send(`user with id ${id} updated`);
}
