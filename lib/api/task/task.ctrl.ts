import { NextFunction, Request, Response } from "express";
import Controller from "../index.ctrl";
import * as TaskService from "./task.service";

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.query.userId;
    try {
        const task = await TaskService.ReadTask(userId);
        res.json(task);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

export const postTask = async (req: Request, res: Response, next: NextFunction) => {
    const newtask = req.body;
    try {
        const task = await TaskService.CreateTask(newtask);
        res.json(task);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};
