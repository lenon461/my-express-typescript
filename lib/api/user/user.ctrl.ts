import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/User.Model";
import User from "../../models/User.Model";
import * as UserService from "./user.service";
import { validateUser } from "./user.validate";

export const SignUp = async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    try {
        const userRecord = await UserModel.create(newUser);
        res.sendStatus(204);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

export const SignIn = async (req: Request, res: Response, next: NextFunction) => {
    const UserInfo = req.body;
    const userId = req.body.id;
    try {
        await UserService.VerifyUser(UserInfo);
        const value: {accesstoken: string, refreshtoken: string }
            = await UserService.IssueToken(UserInfo);
        const [updatedRows, userRecord] = await UserModel.update(value, {
            where: { id: userId },
            fields: ["refreshtoken"],
        });
        if (!updatedRows) { throw new Error("User Token Update fail"); }
        res.status(201);
        res.json(value);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

export const ShowProfile = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.id;
    try {
        const userRecord = await UserModel.findOne({
            where: { id: userId },
            attributes: ["id", "name", "email"],
        });
        res.json(userRecord);
    } catch (error) {
        next(error);
    }
};

export const ReissueAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    const UserInfo = req.body;
    try {
        delete UserInfo.iat;
        delete UserInfo.exp;
        const userRecord = await UserModel.findOne({
                where: { id: UserInfo.id },
                attributes: ["refreshtoken"],
        });
        console.log(userRecord?.refreshtoken);

        const {accesstoken, refreshtoken}
            = await UserService.IssueToken(UserInfo);

        if (userRecord?.refreshtoken === req.headers.authorization) {
            res.json({accesstoken, expiresIn: 3600});
        } else {
            res.status(401);
            res.send("Invalid token");
        }
    } catch (error) {
        next(error);
    }
};
