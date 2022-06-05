"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_router_dom_2 = require("react-router-dom");
const Modal_1 = require("../styles/Modal");
const Modal_2 = require("../styles/Modal");
const LogoCompo_1 = __importDefault(require("./LogoCompo"));
// interface handleCompleteProps {
//   isOpen: boolean;
//   openHandler: () => void;
// }
const Complete = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const isFinalOpen = (0, react_redux_1.useSelector)((state) => state.finalModalStatus.isOpen);
    // { isOpen, openHandler }: handleCompleteProps
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Modal_1.ModalContainer, { children: isFinalOpen === true ? ((0, jsx_runtime_1.jsx)(Modal_1.ModalBackdrop, Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: (0, jsx_runtime_1.jsx)(Modal_1.ModalView, Object.assign({ onClick: (e) => e.preventDefault() }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "desc" }, { children: [(0, jsx_runtime_1.jsx)(LogoCompo_1.default, {}), (0, jsx_runtime_1.jsx)("div", { children: "\uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("div", { children: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694 " }), (0, jsx_runtime_1.jsx)(react_router_dom_2.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(Modal_2.ModalBtn, Object.assign({ onClick: () => {
                                        window.location.reload();
                                    } }, { children: "\uD655\uC778" })) }))] })) })) }))) : null }) }));
};
exports.default = Complete;
//# sourceMappingURL=Complete.js.map