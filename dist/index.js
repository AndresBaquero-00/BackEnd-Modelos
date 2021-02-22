"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var serie_1 = __importDefault(require("./routes/serie"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = new server_1.default();
// Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/serie', serie_1.default);
server.start(function () {
    console.log('Server corriendo en ', server.port);
});
