// declare routing
const express = require('express');
const userController = require('./user.controller');

module.exports = function setRoutes(app) {
    const router = express.Router();

    router.route('/users').get(userController.getAll);
    router.route('/user').get(userController.getUserById);
    router.route('/addUser').post(userController.addUser);
    router.route('/delete/:id').delete(userController.deleteUser);
    router.route('/updateUser').post(userController.updateUser);

    app.use(router);
}