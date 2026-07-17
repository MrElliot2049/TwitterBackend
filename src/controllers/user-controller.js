import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
     try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'successfully signed up',
            err: {},
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'signUp failed',
            err: error,
            data: {}
        });
    }
}

export const login = async (req, res) => {
    try {
        const token = await userService.signIn({email: req.body.email, password: req.body.password});
        return res.status(201).json({
            message: 'successfully logged in',
            success: true,
            data: token,
            err: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'login failed',
            err: error,
            data: {}
        });
    }
}