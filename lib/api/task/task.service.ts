import TaskModel from "../../models/Task.Model";
import TaskType from "../../types/TaskType";

export const AddTask = async (task: TaskType) => {
    try {
        const taskRecord = await TaskModel.create(task);
        return taskRecord;
    } catch (error) {
        console.error(error);
    }
};
