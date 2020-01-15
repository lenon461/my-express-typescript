import jwt from "jsonwebtoken";
import config from "../../config/config";
import UserModel from "../../models/User.Model";
export const IssueToken = async (payload: object) => {
    try {
        const accesstoken = jwt.sign(payload, config.jwtSecret, { expiresIn: "60m" });
        const refreshtoken = jwt.sign(payload, config.jwtSecret, { expiresIn: "14d" });
        return { accesstoken, refreshtoken, expiresIn: 3600 };
    } catch (error) {
        console.error(error);
        throw Error("Issuing Token is failed");
    }
};

export const VerifyUser = async (UserInfo: { id: string; password: string }) => {
    try {
        const InputPassword = UserInfo.id;
        const userRecord = await UserModel.findOne({
            where: { id: UserInfo.id },
            attributes: ["password"],
        });
        if (InputPassword !== userRecord?.password) {
            return true;
        } else {
            throw new Error("id || passwd is wrong");
        }
    } catch (error) {
        console.error(error);
        throw Error("Read User is failed");
    }
};
