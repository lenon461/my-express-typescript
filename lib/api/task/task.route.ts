import {Router} from "express";
import * as taskController from "./task.ctrl";
const router = Router();

router.get("/", taskController.getTask);
router.post("/", taskController.postTask);

export default router;
