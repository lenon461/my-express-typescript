import { NextFunction, Request, Response } from "express";

export default class Controller {
    public req: Request;
    public res: Response;
    public next: NextFunction;
    // constructor(req: Request, res: Response, next: NextFunction) {
    //     this.req = req;
    //     this.res = res;
    //     this.next = next;
    // }
}
// class TaskController extends Controller {
//     // constructor(req: Request, res: Response, next: NextFunction) {
//     //     super(req, res, next);
//     // }
//     public async postTask() {
//         const postTaskD = async (req: Request, res: Response, next: NextFunction) => {
//             try {
//                 const task = await TaskService.AddTask({
//                     name: "task4",
//                     state: "Scheduled",
//                     userId: "jslee3",
//                 });

//                 res.json(task);

//             } catch (error) {
//                 next(error);
//             }
//         };
//         return postTaskD;
//     }
// }
// export default new TaskController();
