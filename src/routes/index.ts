import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('main api route!');
});

routes.use('/images', images);

export default routes;
