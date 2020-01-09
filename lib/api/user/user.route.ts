import {Router} from "express";
import * as UserController from "./user.ctrl";
import { validateUser } from "./user.validate";

const router = Router();

router.get("/", validateUser, UserController.postUser);

export default router;
