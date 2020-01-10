import { NextFunction, Request, Response } from "express";
import { validateUser } from "../user/user.validate";

const validate = (req: Request, res: Response, next: NextFunction) => {
    console.log("validate");

    try {
        console.log("validate2");
        validateUser(req.body);
        next();

        console.log("validate3");
    } catch (error) {
        console.log("validate4");
        next(error);

    }
};

export default validate;
