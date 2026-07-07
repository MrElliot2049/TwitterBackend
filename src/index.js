import express from 'express';
import { PORT } from './config/server-config.js';
import { connect } from './config/database.js';
import { TweetService }  from './services/tweet-service.js'
const app = express();
const startServer = async () => {
    await connect();
    app.listen(PORT, async () => {
        console.log(`Server started listening on Port ${PORT}`);
        let repo = new TweetService();
        await repo.create({
            content : "#NEY have #WON"
        });
    })
}

startServer();