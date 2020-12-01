const { Router } = require('express');
const PostcodeController = require('./app/controllers/PostcodeController');

const routes = new Router();

routes.get('/postcodes/:code', PostcodeController.index); //única rota, postcodes

module.exports = routes;
