import { Router } from "express";
import * as TaskController from "./task.ctrl";
const router = Router();

router.get("/", TaskController.getTask);
router.post("/", TaskController.postTask);

export default router;
