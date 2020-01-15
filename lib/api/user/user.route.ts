import { Router } from "express";
// import validate from  "../middlewares/validate";
import * as UserController from "./user.ctrl";

const router = Router();

router.post("/refreshAccesstoken", UserController.ReissueAccessToken);
router.get("/profile", UserController.ShowProfile);

export default router;
