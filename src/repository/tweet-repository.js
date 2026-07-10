import Tweet from '../models/tweet.js'
import { CrudRepository } from './index.js';
export class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}
