"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const styled_components_2 = __importDefault(require("styled-components"));
const ModalBackdrop = styled_components_2.default.div `
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
const ModalContainer = styled_components_2.default.div `
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;
const ModalView = styled_components_2.default.div `
  border-radius: 10px;
  background-color: #ffffff;
  width: 700px;
  height: 700px;
`;
const Container1 = styled_components_2.default.div `
  width: 600px;
  height: 175px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
`;
const MenuImgContainer = styled_components_2.default.div `
  width: 200px;
  height: 175px;
  border: 1px solid black;
`;
const Container2 = styled_components_2.default.div `
  width: 400px;
  height: 175px;
  border: 1px solid black;
`;
const MenuName = styled_components_2.default.div `
  width: 300px;
  height: 35px;
  margin-left: 20px;
  border: 1px solid black;
  text-align: left;
  font-size: 35px;
  font-style: bold;
`;
const Container3 = styled_components_2.default.div `
  width: 400px;
  height: 35px;
  margin-top: 100px;
  border: 1px solid black;
  display: flex;
`;
const MenuPrice = styled_components_2.default.div `
  width: 150px;
  height: 35px;
  border: 1px solid black;
  font-size: 35px;
  font-style: bold;
`;
const Counter = styled_components_2.default.input.attrs({
    type: "number",
}) `
  width: 150px;
  height: 32px;
  text-align: center;
  margin-left: 100px;
  font-weight: bold;
  font-size: 35px;
  border: 1px solid black;
`;
const TextContainer = styled_components_2.default.div `
  width: 600px;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-style: bold;
  text-align: left;
  border: 1px solid black;
`;
const SizeOptionContainer = styled_components_2.default.div `
  width: 600px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: 1px solid black;
  display: flex;
`;
const SizeOption = styled_components_2.default.label `
    width: 120px;
    height: 120px;
    border: 1px solid black;
    margin-right: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const RadioButton = styled_components_2.default.input.attrs({
    type: 'radio'
}) `
    display: none;
    &:checked + ${SizeOption}{
        width: 120px;
        height: 120px;
        border: 1px solid black;
        background-color: #036635;
        color: white;
        margin-right: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;
const ButtonContainer = styled_components_2.default.div `
  width: 600px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  margin-top: 130px;
`;
const Button1 = styled_components_2.default.button `
  width: 150px;
  height: 60px;
  margin-right: 30px;
  border: 1px solid black;
  font-size: 32px;
  font-style: bold;
  color: white;
  background-color: #036635;
  cursor: pointer;
`;
const Button2 = styled_components_2.default.button `
  width: 150px;
  height: 60px;
  margin-left: 30px;
  border: 1px solid black;
  font-size: 32px;
  font-style: bold;
  background-color: white;
  cursor: pointer;
`;
const OptionModal = ({ setOpenModal, select, totalPrice, setTotalPrice }) => {
    const [size, setSize] = (0, react_1.useState)('R');
    const [quantity, setQuantity] = (0, react_1.useState)(1);
    const [price, setPrice] = (0, react_1.useState)(select.price);
    const [goToCart, setGoToCart] = (0, react_1.useState)({
        name: select.name + `(${size})`,
        price: select.price,
        quantity: quantity
    });
    const openModalHandler = () => {
        setOpenModal(false);
    };
    const quantityHandler = (e) => {
        setQuantity(e.target.value);
    };
    const dispatch = (0, react_redux_1.useDispatch)();
    const sizeHandler = (e) => {
        setSize(e.target.value);
        if (e.target.value === 'L') {
            setPrice(price + 1000);
        }
        else {
            setPrice(select.price);
        }
    };
    const goToCartHandler = (e) => {
        setGoToCart({
            name: select.name + `(${size})`,
            price: price,
            quantity: quantity
        });
        setTotalPrice(totalPrice + (price * quantity));
        setOpenModal(false);
    };
    console.log(size, price, quantity);
    //   console.log(goToCart)
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ModalContainer, { children: (0, jsx_runtime_1.jsx)(ModalBackdrop, { children: (0, jsx_runtime_1.jsxs)(ModalView, Object.assign({ onClick: (e) => e.stopPropagation() }, { children: [(0, jsx_runtime_1.jsxs)(Container1, { children: [(0, jsx_runtime_1.jsx)(MenuImgContainer, {}), (0, jsx_runtime_1.jsxs)(Container2, { children: [(0, jsx_runtime_1.jsx)(MenuName, { children: select.name }), (0, jsx_runtime_1.jsxs)(Container3, { children: [(0, jsx_runtime_1.jsxs)(MenuPrice, { children: ["\u20A9", price] }), (0, jsx_runtime_1.jsx)(Counter, { min: 1, defaultValue: quantity, onChange: quantityHandler })] })] })] }), (0, jsx_runtime_1.jsx)(TextContainer, { children: "\uC0AC\uC774\uC988\uB97C \uC120\uD0DD\uD558\uC138\uC694" }), (0, jsx_runtime_1.jsxs)(SizeOptionContainer, { children: [(0, jsx_runtime_1.jsx)(RadioButton, { id: "Regular", className: "radioBtn", name: "radio", value: "R", checked: size === "R", onChange: sizeHandler }), (0, jsx_runtime_1.jsx)(SizeOption, Object.assign({ htmlFor: "Regular" }, { children: "Regular" })), (0, jsx_runtime_1.jsx)(RadioButton, { id: "Large", className: "radioBtn", name: "radio", value: "L", onChange: sizeHandler }), (0, jsx_runtime_1.jsxs)(SizeOption, Object.assign({ htmlFor: 'Large' }, { children: ["Large", (0, jsx_runtime_1.jsx)("br", {}), "(+1000)"] }))] }), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button1, Object.assign({ onClick: goToCartHandler }, { children: "\uB2F4\uAE30" })), (0, jsx_runtime_1.jsx)(Button2, Object.assign({ onClick: openModalHandler }, { children: "\uB4A4\uB85C" }))] })] })) }) }) }));
};
exports.default = OptionModal;
//# sourceMappingURL=OptionModal.js.map