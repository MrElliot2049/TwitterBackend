import { TweetService } from "../services/tweet-service.js";

const tweetService = new TweetService();
export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'successfully created the tweet',
            err: {},
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'can not create the tweet',
            err: error,
            data: {}
        });
    }
}

export const getTweet = async (req, res) => {
     try {
        const response = await tweetService.getTweet(req.params.id);
        return res.status(201).json({
            success: true,
            message: 'successfully got the tweet',
            err: {},
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'can not get the tweet',
            err: error,
            data: {}
        });
    }
}