"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const Modal_1 = require("../styles/Modal");
// import {
//   BigBtn,
//   BigBtnDiv,
//   CancelBtnDiv,
//   button,
//   SmallBtnDiv,
//   Title,
// } from "../styles/Payment";
const Complete_1 = __importDefault(require("./Complete"));
const PaymentModal = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    //   {
    //   openPaymentHandler,
    //   isPaymentOpen,
    // }: paymentModalProps
    const isPaymentOpen = (0, react_redux_1.useSelector)((state) => state.paymentModalStatus.isPaymentOpen);
    console.log(isPaymentOpen);
    const isFinalOpen = (0, react_redux_1.useSelector)((state) => state.finalModalStatus.isOpen);
    // console.log(isFinalOpen);
    // const [isOpen, setIsOpen] = useState(false);
    // const openHandler = () => {
    //   setIsOpen(!isOpen);
    // };
    // useEffect(() => {
    //   window.location.reload();
    // }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Modal_1.ModalContainer, { children: isPaymentOpen === true ? ((0, jsx_runtime_1.jsx)(Modal_1.ModalBackdrop, Object.assign({ onClick: () => dispatch({ type: "clicked" }) }, { children: (0, jsx_runtime_1.jsx)(Modal_1.ModalView, Object.assign({ onClick: (e) => e.preventDefault() }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "desc" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: "\uACB0\uC81C\uC218\uB2E8\uC744 \uC120\uD0DD\uD558\uC138\uC694 " }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uC2E0\uC6A9\uCE74\uB4DC" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uAE30\uD504\uD2B8\uCE74\uB4DC" }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uCE74\uCE74\uC624\uD398\uC774" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uB124\uC774\uBC84\uD398\uC774" }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uD1A0\uC2A4" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "finalClicked" }) }, { children: "\uD398\uC774\uCF54" }))] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch({ type: "hide" }) }, { children: "\uCDE8\uC18C" }))] }), isFinalOpen ? ((0, jsx_runtime_1.jsx)(Complete_1.default, {})) : (
                            // isOpen={isOpen} openHandler={openHandler} />
                            "")] })) })) }))) : null }) }));
};
exports.default = PaymentModal;
//# sourceMappingURL=PaymentModal.js.map