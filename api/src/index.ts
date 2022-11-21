import mongoose from 'mongoose';

import server from './server';

const port = 3000;

mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@db:27017/${process.env.DB}?authSource=admin`,
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
