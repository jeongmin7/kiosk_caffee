"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_2 = __importDefault(require("styled-components"));
const Tab_1 = require("../components/Tab");
const react_redux_1 = require("react-redux");
const Modal_1 = __importDefault(require("../components/Modal"));
const react_router_dom_2 = require("react-router-dom");
const BackgroundContainer = styled_components_2.default.div `
  width: 98vw;
  height: 97vh;
  border: 1px solid black;
`;
const Container = styled_components_2.default.div `
  width: 700px;
  height: 100%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;
const LogoContainer = styled_components_2.default.div `
  width: 100%;
  height: 80px;
  margin-top: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;
const Logo = styled_components_2.default.img `
  width: 160px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;
const MenuTab1 = styled_components_2.default.div `
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border: 1px solid black;
`;
const MenuContainer = styled_components_2.default.div `
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  border: 1px solid black;
`;
const MenuImgContainer = styled_components_2.default.div `
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  border: 1px solid black;
`;
const MenuImg = styled_components_2.default.img `
  width: 100%;
  height: 80%;
  border: 1px solid black;
`;
const MenuPrice = styled_components_2.default.div `
  width: 100%;
  height: 20%;
  border: 1px solid black;
  text-align: center;
`;
const ButtonContainer = styled_components_2.default.div `
  width: 100%;
  height: 60px;
  display: flex;
  margin-top: 20px;
  border: 1px solid black;
`;
const SumOfMoney = styled_components_2.default.div `
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-weight: bold;
  font-size: 27px;
`;
const PayButton = styled_components_2.default.button `
  width: 50%;
  height: 100%;
  border: 1px solid black;
  font-weight: bold;
  color: white;
  background-color: #036635;
  font-size: 27px;
  cursor: pointer;
`;
const SelectMenu = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const isOpen = (0, react_redux_1.useSelector)((state) => state.modalStatus.isOpen);
    const [select, setSelect] = (0, react_1.useState)({
        name: "",
        price: 0,
    });
    const [totalPrice, setTotalPrice] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsx)(BackgroundContainer, { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(LogoContainer, { children: (0, jsx_runtime_1.jsx)(react_router_dom_2.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(Logo, { id: "logo", src: "../\uC2A4\uD0C0\uBC85\uC2A4_\uB85C\uACE0-removebg-preview.png" }) })) }), (0, jsx_runtime_1.jsxs)(MenuTab1, { children: [(0, jsx_runtime_1.jsx)(Tab_1.Tab, { select: select, setSelect: setSelect, totalPrice: totalPrice, setTotalPrice: setTotalPrice }), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsxs)(SumOfMoney, { children: ["\u20A9", totalPrice] }), (0, jsx_runtime_1.jsx)(PayButton, Object.assign({ onClick: () => dispatch({ type: "show" }) }, { children: "\uACB0\uC81C\uD558\uAE30" })), isOpen === true ? (0, jsx_runtime_1.jsx)(Modal_1.default, {}) : ""] })] })] }) }));
};
exports.default = SelectMenu;
//# sourceMappingURL=SelectMenu.js.map