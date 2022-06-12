"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (error) {
        res.status(403);
        res.send({ errors: error });
    }
};
exports.validateResult = validateResult;
//# sourceMappingURL=validateHelper.js.map