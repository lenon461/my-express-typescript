"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const app_1 = __importDefault(require("../../src/app"));
app_1.default.listen(3000, () => {
    console_1.log("Server Start");
});
