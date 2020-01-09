import { NextFunction, Request, Response } from "express";
import Controller from "../index.ctrl";
import * as TaskService from "./task.service";

export const postTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await TaskService.AddTask({
            name: "task4",
            state: "Scheduled",
            userId: "jslee3",
        });

        res.json(task);

    } catch (error) {
        next(error);
    }
};
