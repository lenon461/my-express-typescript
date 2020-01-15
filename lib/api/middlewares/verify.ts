import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config/config";

const verify = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    try {
        const result = verifyToken(token);
        req.body.decoded = result;
        next();
    } catch (error) {
        error.status = 401;
        next(error);
    }
};

export const verifyToken = (token: string | undefined) => {
    if (token) {
        const result = jwt.verify(token, config.jwtSecret);
        return result;
    } else {
        throw new Error("no Token");
    }
};

export default verify;
