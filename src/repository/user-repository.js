import User from "../models/user.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getUserByEmail(data) {
        try {
            const user = await User.findOne(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}
