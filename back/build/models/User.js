"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Sequelize = __importStar(require("sequelize"));
const db_1 = __importDefault(require("../config/db"));
exports.User = db_1.default.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    type_document: {
        type: Sequelize.STRING(5),
        allowNull: true,
    },
    document: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    date_birth: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    blood_type: {
        type: Sequelize.STRING(4),
        allowNull: true,
    },
    health_habits: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    congenitals_defects: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    medical_conditions: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    eps: {
        type: Sequelize.STRING(25),
        allowNull: true,
    },
    responsible_home: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    password: Sequelize.STRING
});
//# sourceMappingURL=User.js.map