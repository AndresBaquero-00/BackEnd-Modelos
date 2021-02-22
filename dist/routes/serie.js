"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var conexion_1 = __importDefault(require("../classes/conexion"));
var serieRoute = express_1.Router();
serieRoute.get('/consulta', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var conexion, id, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conexion = new conexion_1.default();
                id = request.query;
                data = null;
                if (!id.id) return [3 /*break*/, 2];
                return [4 /*yield*/, conexion.query("select * from serie where id=" + id.id)];
            case 1:
                data = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, conexion.query('select * from serie;')];
            case 3:
                data = _a.sent();
                _a.label = 4;
            case 4:
                response.json(data);
                return [2 /*return*/];
        }
    });
}); });
serieRoute.post('/registro', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var body, conexion, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = request.body;
                conexion = new conexion_1.default();
                return [4 /*yield*/, conexion.query("insert into serie values(nextval('serie_sequence'), \n    '" + body.nombre + "','" + body.anio + "', " + body.num_temp + ",'" + body.descripcion + "');")];
            case 1:
                resp = _a.sent();
                response.json({
                    ok: true,
                    rowCount: resp.rowCount
                });
                return [2 /*return*/];
        }
    });
}); });
serieRoute.delete('/delete', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, conexion, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.query;
                conexion = new conexion_1.default();
                return [4 /*yield*/, conexion.query("delete from serie where id=" + id.id + ";")];
            case 1:
                resp = _a.sent();
                response.json({
                    ok: true,
                    rowCount: resp.rowCount
                });
                return [2 /*return*/];
        }
    });
}); });
serieRoute.post('/update', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var body, conexion, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = request.body;
                conexion = new conexion_1.default();
                return [4 /*yield*/, conexion.query("update serie set nombre = '" + body.nombre + "', \n    anio = '" + body.anio + "', num_temp = " + body.num_temp + ", descripcion = '" + body.descripcion + "'\n    where id = " + body.id + ";")];
            case 1:
                resp = _a.sent();
                response.json({
                    ok: true,
                    rowCount: resp.rowCount
                });
                return [2 /*return*/];
        }
    });
}); });
exports.default = serieRoute;
