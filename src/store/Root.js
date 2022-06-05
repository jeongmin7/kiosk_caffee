"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const index_1 = require("./index");
// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.
const rootReducer = (0, redux_1.combineReducers)({
    modalStatus: index_1.modalStatus,
    paymentModalStatus: index_1.paymentModalStatus,
    finalModalStatus: index_1.finalModalStatus,
    optionModalStatus: index_1.optionModalStatus,
});
exports.default = rootReducer;
//# sourceMappingURL=Root.js.map