"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console_1.log("Server Start");
});
