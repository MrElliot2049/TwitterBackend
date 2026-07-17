import express from 'express';
import { PORT } from './config/server-config.js';
import { connect } from './config/database.js';
import ApiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import { TweetService }  from './services/tweet-service.js';
import LikeService from './services/like-service.js';
import { UserRepository, TweetRepository} from './repository/index.js';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(passport.initialize());
passportAuth(passport);
app.use('/api',ApiRoutes);
const startServer = async () => {
    await connect();
    app.listen(PORT, async () => {
        console.log(`Server started listening on Port ${PORT}`);
    })
}

startServer();