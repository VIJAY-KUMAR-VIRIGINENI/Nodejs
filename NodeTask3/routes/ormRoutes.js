const { add } = require('nodemon/lib/rules');
const addUser = require('../controlers/ormControler.js').addUser;
const getUser = require('../controlers/ormControler.js').getUser;
const updateUser = require('../controlers/ormControler.js').updateUser;
const deleteUser = require('../controlers/ormControler.js').deleteUser;
const getUserById = require('../controlers/ormControler.js').getUserById;


const routes = (app) =>{
    app.route('/users')
    .get(getUser)
    .post(addUser)
    app.route('/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
}

module.exports = {
    routes: routes
}