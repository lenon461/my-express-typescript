import { NextFunction, Request, Response } from "express";
import { validateUser } from "../user/user.validate";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validateUser(req.body);
        next();
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

export default validate;
