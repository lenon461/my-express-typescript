import { Router } from "express";
// import validate from  "../middlewares/validate";
import verify from "../middlewares/verify";
import * as UserController from "./user.ctrl";

const router = Router();

router.use(verify);
router.post("/refreshAccesstoken", UserController.ReissueAccessToken);
router.get("/profile", UserController.ShowProfile);

export default router;
