export class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (error) {
            console.log('Something went wrong at the crud level');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const res = await this.model.findByIdAndDelete(id);
            return res;
        } catch (error) {
            console.log('Something went wrong at the crud level');
            throw error;
        }
    }

    async get(id) {
        try {
            const res = await this.model.findById(id);
            return res;
        } catch (error) {
            console.log('Something went wrong at the crud level');
            throw error;
        }
    }

    async getAll() {
        try {
            const res = await this.model.find({});
            return res;
        } catch (error) {
            console.log('Something went wrong at the crud level');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const res = this.model.findByIdAndUpdate(id, data, {new : true});
            return res;
        } catch (error) {
            console.log('Something went wrong at the crud level');
            throw error;
        }
    }
}