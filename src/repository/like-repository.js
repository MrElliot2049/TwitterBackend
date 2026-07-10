import Like from '../models/like.js';
import CrudRepository from './index.js';

export class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }
}
