import Hashtag from '../models/hashtags.js'

export class HashtagRepository {
    async create(data) {
        try {
            const response = await Hashtag.create(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const res = await Hashtag.findById(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch(error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const res = await Hashtag.findByIdAndDelete(id);
            return res;
        } catch(error) {
            console.log(error);
        }
    }

    async findByName(tagList) {
        try {
            const res = await Hashtag.find({
                title: tagList
            });
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

