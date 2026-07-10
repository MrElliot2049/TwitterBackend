import User from "../models/user.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
}
