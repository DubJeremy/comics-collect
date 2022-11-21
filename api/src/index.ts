import mongoose from 'mongoose';

import server from './server';

const port = 3000;

mongoose.connect(
    'mongodb://root:example@db:27017/test?authSource=admin',
    {
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        socketTimeoutMS: 30000,
    },
    () => {
        console.log('Connection succeeded');
    },
);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
