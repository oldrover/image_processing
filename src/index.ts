import express from 'express';
import imageprocessor from './utilities/imageprocessor';

const app = express();
const port = 3000;

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.redirect('/api/images');
});

app.use('/api/images', imageprocessor);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
