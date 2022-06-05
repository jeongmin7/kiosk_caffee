"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatus = exports.optionModalStatus = exports.finalModalStatus = exports.paymentModalStatus = exports.modalStatus = void 0;
const initialModalState = {
    isOpen: false,
};
const modalStatus = (state = initialModalState, action) => {
    const newState = Object.assign({}, state);
    if (action.type === "show") {
        newState.isOpen = true;
    }
    if (action.type === "hide") {
        newState.isOpen = false;
    }
    return newState;
};
exports.modalStatus = modalStatus;
const initialPaymentModalState = {
    isPaymentOpen: false,
};
const paymentModalStatus = (state = initialPaymentModalState, action) => {
    const paymentState = Object.assign({}, state);
    if (action.type === "clicked") {
        paymentState.isPaymentOpen = true;
    }
    if (action.type === "closed") {
        paymentState.isPaymentOpen = false;
    }
    return paymentState;
};
exports.paymentModalStatus = paymentModalStatus;
const initialFinalModalState = {
    isOpen: false,
};
const finalModalStatus = (state = initialFinalModalState, action) => {
    const newState = Object.assign({}, state);
    if (action.type === "finalClicked") {
        newState.isOpen = true;
    }
    return newState;
};
exports.finalModalStatus = finalModalStatus;
const initialOptionModalState = {
    isOpen: false,
};
const optionModalStatus = (state = initialOptionModalState, action) => {
    const newState = Object.assign({}, state);
    if (action.type === "optionClicked") {
        newState.isOpen = true;
    }
    return newState;
};
exports.optionModalStatus = optionModalStatus;
// const quantityHandler = (e: any) => {
//   setSelect({
//     name: select.name,
//     price: select.price,
//     quantity: e.target.value,
//   });
// };
const initialOrder = {
    payload: {
        name: "",
        price: 0,
        quantity: 0,
    },
};
const orderStatus = (state = initialOrder, action) => {
    const newState = Object.assign({}, state);
    if (action.type === "ordered") {
        console.log("name");
    }
};
exports.orderStatus = orderStatus;
//# sourceMappingURL=index.js.map