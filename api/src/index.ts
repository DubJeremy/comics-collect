import mongoose from 'mongoose';

import server from './server';

const port = 3000;

mongoose
    .connect('mongodb://comicsco:mdp@db:27017/test?authSource=admin', {
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        socketTimeoutMS: 30000,
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée ! error: ', err));

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
