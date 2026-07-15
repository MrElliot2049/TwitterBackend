import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const result = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            message : "Sucessfully toggled like",
            status : true,
            data : result,
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            message : "can't toggle like",
            status: false,
            data : {},
            err : error
        });
    }
}