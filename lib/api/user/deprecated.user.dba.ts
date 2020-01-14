import UserModel from "../../models/User.Model";
import UserType from "../../types/UserType";

export const CreateUser = async (user: any) => {
    try {
        const userRecord = await UserModel.create(user);
        return userRecord;
    } catch (error) {
        console.error(error);
        throw Error("Create User is failed");
    }
};

export const ReadUser = async (userId: string, attributes: string[]) => {
    try {
        const userRecord = await UserModel.findOne({
            where: { id: userId },
            attributes,
        });
        return userRecord;
    } catch (error) {
        console.error(error);
        throw Error("Read User is failed");
    }
};

export const UpdateUser = async (userId: string, fields: string[], value: object) => {
    try {
        const [updatedRows, userRecord] = await UserModel.update(value, {
            where: { id: userId },
            returning: true,
            fields,
        });
        if (!updatedRows) {
            throw Error("affected rows are none");
        } else if (updatedRows > 1) {
            throw Error("affected rows more than one");
        }
        return userRecord.pop();
    } catch (error) {
        console.error(error);
        throw Error("Update User is failed");
    }
};
