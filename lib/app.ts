import { log } from "console";
import express from "express";
import createError from "http-errors";
import morgan from "morgan";
import winston from "winston";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

import router from "./api/index.route";
app.use("/", router);

app.get("/", (req: express.Request, res: express.Response) => {
    log(req.app.get("env"));
    res.send(["Hello World", req.app.get("env")]);
});

app.use((req, res, next) => {
    next(createError(404));
});
app.use((err: createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page

    res.status(err.status || 500);
    res.send(err.message);
});
export default app;
