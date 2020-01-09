import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";

const UserSchema = Joi.object({

    id: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    repeat_password: Joi.ref("password"),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
})
    .with("password", "repeat_password");

// Also -

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const user = req.body || {
        id: "jslee3",
        name: "ljs",
        passwd: "1234",
        repeat_password: Joi.ref("password"),
        email: "jslee02@korens.com",
    };
    const value = UserSchema.validate(user);
    console.log(value);

    if (value.error) {
        console.log("valueerror");

        next({status: 401, message: value.error, properties: "xx"});
    } else {
        console.log("no error");

        next();
    }
};
