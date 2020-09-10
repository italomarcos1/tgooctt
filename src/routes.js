import { Router } from 'express';
import PostcodeController from './app/controllers/PostcodeController';

const routes = new Router();

routes.get('/postcodes/:postcode', PostcodeController.index);

export default routes;
