import express from 'express';
import imageprocessor from './utilities/imageprocessor';

const app = express();
const port = 3000;

app.use(express.static('images'));

app.get('/', (_req, res): void => {
  res.send('Server is running');
});

app.use('/api/images', imageprocessor.imageprocessing);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
