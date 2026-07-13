import express from 'express';
import { PORT } from './config/server-config.js';
import { connect } from './config/database.js';
import ApiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import { TweetService }  from './services/tweet-service.js';
import LikeService from './services/like-service.js';
import { UserRepository, TweetRepository} from './repository/index.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 
app.use('/api',ApiRoutes);
const startServer = async () => {
    await connect();
    app.listen(PORT, async () => {
        console.log(`Server started listening on Port ${PORT}`);
    })
}

startServer();