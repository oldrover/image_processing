import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use(express.static('images'));

app.get('/', (_req, res): void => {  
  res.send('Server is running!');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
