import { Router } from "express";
import TaskRouter from "./task/task.route";
import UserRouter from "./user/user.route";

import * as UserController from "./user/user.ctrl";
import verify from "./middlewares/verify";

const router = Router();

router.post("/SignUp", UserController.SignUp);
router.post("/SignIn", UserController.SignIn);

router.use(verify);
router.use("/task", TaskRouter);
router.use("/user", UserRouter);

export default router;

// {
// 	"id": "jslee02",
// 	"name": "ljs",
// 	"password": "1234",
// 	"email": "jslee02@korens.co3m"
// }
// {
// 	"name": "made aws arch",
// 	"state": "scheduling",
// 	"userId": "jslee02"
// }
