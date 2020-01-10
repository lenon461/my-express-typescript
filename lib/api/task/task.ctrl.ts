import { NextFunction, Request, Response } from "express";
import Controller from "../index.ctrl";
import * as TaskService from "./task.service";

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.query.userId;
    try {
        const task = await TaskService.ReadTask(userId);
        res.json(task);
    } catch (error) {
        next(error);
    }
};

export const postTask = async (req: Request, res: Response, next: NextFunction) => {
    const newtask = req.body;
    try {
        const task = await TaskService.CreateTask(newtask);
        res.json(task);
    } catch (error) {
        next({ status: 400, error: String(error) });
    }
};
