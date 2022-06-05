"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const Root_1 = __importDefault(require("./Root"));
const store = (0, redux_1.createStore)(Root_1.default);
console.log(store.getState());
exports.default = store;
//# sourceMappingURL=Store.js.map