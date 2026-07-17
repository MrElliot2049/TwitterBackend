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

    async getUserByEmail(email) {
        try {
            const user = await this.userRepo.getUserByEmail({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: "no user is found",
                };
            }
            if (!user.comparePass(data.password)) {
                throw {
                    message: "incorrect password",
                };
            }
            const token = user.genJwt();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;