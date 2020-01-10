import UserModel from "../../models/User.Model";
import UserType from "../../types/UserType";

export const SignUp = async (user: UserType) => {
    try {
        const userRecord = await UserModel.create(user);
        return userRecord;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const ReadUser = async (userId: string) => {
    try {
        const userRecord = await UserModel.findOne({where : {id: userId}});
        return userRecord;
    } catch (error) {
        console.error(error);
        return error;
    }
};
