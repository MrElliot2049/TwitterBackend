import { UserRepository } from "../repository/user-repository.js";

export class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }
    
    async signUp(data) {
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;