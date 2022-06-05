"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_2 = require("react-router-dom");
const Main_1 = __importDefault(require("./pages/Main"));
const SelectMenu_1 = __importDefault(require("./pages/SelectMenu"));
const Payment_1 = __importDefault(require("./pages/Payment"));
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_2.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_2.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Main_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "/menu", element: (0, jsx_runtime_1.jsx)(SelectMenu_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Route, { path: "/payment", element: (0, jsx_runtime_1.jsx)(Payment_1.default, {}) })] }) }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map