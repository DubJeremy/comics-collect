import express from 'express';
import bodyParser from 'body-parser';

import routes from './entities';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', routes);

app.get('/', (req, res) => {
    res.send('Hello world !');
});

export default app;
