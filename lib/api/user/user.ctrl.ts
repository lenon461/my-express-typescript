import { NextFunction, Request, Response } from "express";
import * as UserService from "./user.service";
import { validateUser } from "./user.validate";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {

    const userId = req.query.userId;

    try {

        const user = await UserService.ReadUser(userId);
        res.json(user);

    } catch (error) {

        next(error);
    }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {

    const newuser = req.body;

    try {

        const user = await UserService.SignUp(newuser);
        res.json(user);

    } catch (error) {

        next(error);
    }
};
