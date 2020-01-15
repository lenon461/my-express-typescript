import { NextFunction, Request, Response } from "express";
import TaskModel from "../../models/Task.Model";

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.decoded.id;
    try {
        const taskRecord = await TaskModel.findOne({ where: { userId } });
        res.json(taskRecord);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

export const postTask = async (req: Request, res: Response, next: NextFunction) => {
    const newtask = req.body;
    try {
        const taskRecord = await TaskModel.create(newtask);
        res.json(taskRecord);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};
