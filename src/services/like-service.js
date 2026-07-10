import { LikeRepository, TweetRepository } from "../repository/index.js";

export default class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        if (modelType == 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId);
        }
        else if (modelType == 'Comment') {
            // later
        }
        else {
            throw Error("unkown model type");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            onModel: modelType,
            likeable: modelId,
            user: userId
        });
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;
        }
        else {
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable: modelId
            })
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}