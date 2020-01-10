import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";
import UserType from "../../types/UserType";

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

    // repeat_password: Joi.ref("password"),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});
// .with("password", "repeat_password");

// Also -

export const validateUser = (user: UserType) => {
    console.log("validateUser1");
    try {
        console.log("validateUser2");
        const value = UserSchema.validate(user);
    } catch (error) {
        console.log("validateUser3");

        throw new Error(error);
    }
};
