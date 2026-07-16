import Tweet from '../models/tweet.js'
import { CrudRepository } from './crud-repository.js';
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
    async getWithComments(id) {
        try {
            const res = await Tweet.findById(id).populate({path : 'comments'}).lean();
            return res;
        } catch (error) {
            throw error;
        }
    }
    async find(id) {
        try {
            const res = await Tweet.findById(id).populate({path: 'likes'});
            return res;
        } catch (error) {
            throw error;
        }
    }
}
