import { NextFunction, Request, Response } from "express";
import * as UserService from "./user.service";
import { validateUser } from "./user.validate";

export const postUser = async (req: Request, res: Response, next: NextFunction) => {

    const newuser = req.body || {
        id: "jslee3",
        name: "ljs",
        passwd: "1234",
        email: "jslee02@korens.co.kr",
    };

    try {

        const user = await UserService.SignUp(newuser);

        res.json(user);

    } catch (error) {

        next(error);
    }
};
