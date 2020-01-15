//not use

import TaskModel from "../../models/Task.Model";
import TaskType from "../../types/TaskType";

export const ReadTask = async (userId: string) => {
    try {
        const taskRecord = await TaskModel.findOne({ where: { userId } });
        return taskRecord;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const CreateTask = async (task: TaskType) => {
    try {
        const taskRecord = await TaskModel.create(task);
        return taskRecord;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
