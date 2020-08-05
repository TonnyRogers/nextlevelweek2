import express from 'express';
import ClassesController from './controllers/ClassController';
import ConnectionController from './controllers/ConnectionController';


const routes = express.Router();

routes.get('/classes', ClassesController.index );
routes.post('/classes', ClassesController.create );

routes.get('/connections', ConnectionController.index);
routes.post('/connections', ConnectionController.create);

export default routes;