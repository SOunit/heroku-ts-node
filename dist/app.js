"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send({ test: "test" });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
