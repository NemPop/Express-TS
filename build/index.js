"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/LoginController");
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['asdasfvd'] }));
app.use(AppRouter_1.AppRouter.getInstance());
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
