"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const Modal_1 = require("../styles/Modal");
const PaymentModal_1 = __importDefault(require("./PaymentModal"));
const Modal = () => {
    const isOpen = (0, react_redux_1.useSelector)((state) => state.modalStatus.isOpen);
    const isPaymentOpen = (0, react_redux_1.useSelector)((state) => state.paymentModalStatus.isPaymentOpen);
    // console.log(isOpen);
    // console.log(isPaymentOpen);
    // const [isOpen, setIsOpen] = useState(false);
    // const openModalHandler = () => {
    //   setIsOpen(!isOpen);
    // };
    // const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    // const openPaymentHandler = () => {
    //   setIsPaymentOpen(!isPaymentOpen);
    // };
    const dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(Modal_1.ModalContainer, { children: [isOpen === true ? ((0, jsx_runtime_1.jsx)(Modal_1.ModalBackdrop, Object.assign({ onClick: () => dispatch({ type: "click" }) }, { children: (0, jsx_runtime_1.jsxs)(Modal_1.ModalView, Object.assign({ onClick: (e) => e.preventDefault() }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "desc" }, { children: [(0, jsx_runtime_1.jsx)(Modal_1.Title, { children: "\uC8FC\uBB38\uB0B4\uC5ED" }), (0, jsx_runtime_1.jsx)(Modal_1.Box, { children: (0, jsx_runtime_1.jsx)(Modal_1.BoxContent, { children: "hello" }) })] })), (0, jsx_runtime_1.jsx)(Modal_1.BtnDiv, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Modal_1.Btn, Object.assign({ onClick: () => dispatch({ type: "clicked" }) }, { children: "\uACB0\uC81C\uD558\uAE30" })), (0, jsx_runtime_1.jsx)(Modal_1.Btn, Object.assign({ onClick: () => dispatch({ type: "hide" }) }, { children: "\uCD94\uAC00\uD558\uAE30" }))] }) })] })) }))) : null, isPaymentOpen ? ((0, jsx_runtime_1.jsx)(PaymentModal_1.default, {})) : (
                // openPaymentHandler={() => dispatch({ type: "clicked" })}
                // isPaymentOpen={isPaymentOpen}
                // />
                "")] }) }));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map