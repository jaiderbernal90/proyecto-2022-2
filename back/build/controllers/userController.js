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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.create = exports.get = exports.getAll = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
// import * as jwt from 'jsonwebtoken'
// import * as Bluebird from 'Bluebird'
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield User_1.User.findAll();
    return res.status(200).json(allUser);
});
exports.getAll = getAll;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findByPk(req.params.idUser);
    return res.status(200).json(user);
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body, hash = bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(8));
    console.log(req.body);
    try {
        yield User_1.User.create(Object.assign(Object.assign({}, req.body), { password: hash }));
        return res.status(200).json({ mensaje: 'Usuario Creado Correctamente' });
    }
    catch (error) {
        console.log(error);
        return res.json({ mensaje: error });
    }
});
exports.create = create;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User_1.User.findByPk(req.params.idUser);
        user === null || user === void 0 ? void 0 : user.update(Object.assign({}, req.body));
        user === null || user === void 0 ? void 0 : user.save();
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        return res.json({ mensaje: error });
    }
});
exports.update = update;
const destroy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User_1.User.findByPk(req.params.idUser);
        if (user)
            user.destroy();
        return res.status(200).json({ mensaje: 'El user se ha eliminado', user: user });
    }
    catch (error) {
        console.log(error);
        return res.json({ mensaje: error });
        next();
    }
});
exports.destroy = destroy;
//# sourceMappingURL=userController.js.map