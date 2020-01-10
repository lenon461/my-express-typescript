import {Router} from "express";
import validate from "../middlewares/validate";
import * as UserController from "./user.ctrl";

const router = Router();

router.get("/", UserController.getUser);
router.post("/", validate, UserController.postUser);

export default router;
