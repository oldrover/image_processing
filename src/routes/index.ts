import express from 'express';
import images from './api/images';

const routes = express.Router();


routes.get('/', (_req, res): void => {
    res.send('main api route!');
});

routes.use('/images', images);

export default routes;