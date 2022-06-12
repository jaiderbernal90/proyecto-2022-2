"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../helpers/validateHelper");
const User_1 = require("../models/User");
exports.validateCreate = [
    (0, express_validator_1.check)('name')
        .exists()
        .not()
        .isEmpty()
        .withMessage('El campo nombre es requerido'),
    (0, express_validator_1.check)('email')
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Formato invalido de email')
        .custom(email => { return User_1.User.findOne({ where: { email } }).then(user => { if (user)
        return Promise.reject('Email en uso'); }); }),
    (0, express_validator_1.check)('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('El campo password es requerido'),
    (req, res, next) => {
        (0, validateHelper_1.validateResult)(req, res, next);
    }
];
//# sourceMappingURL=user.rules.js.map