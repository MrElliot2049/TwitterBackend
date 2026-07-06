import express from 'express';
import { PORT } from './config/server-config.js';
import { connect } from './config/database.js';
const app = express();
const startServer = async () => {
    await connect();
    app.listen(PORT, async () => {
        console.log(`Server started listening on Port ${PORT}`);
    })
}

startServer();