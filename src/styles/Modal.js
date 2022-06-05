"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnLink = exports.BtnDiv = exports.Btn = exports.Box = exports.BoxContent = exports.Title = exports.CloseButton = exports.ModalView = exports.ModalBtn = exports.ModalContainer = exports.ModalBackdrop = void 0;
const styled_components_2 = __importDefault(require("styled-components"));
const react_router_dom_2 = require("react-router-dom");
exports.ModalBackdrop = styled_components_2.default.div `
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
exports.ModalContainer = styled_components_2.default.div `
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;
exports.ModalBtn = styled_components_2.default.button `
  background-color: #133b37;
  padding: 20px;
  color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
exports.ModalView = styled_components_2.default.div.attrs((props) => ({
    role: "dialog",
})) `
  border-radius: 10px;
  background-color: #ffffff;
  width: 800px;
  height: 800px;

  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    color: #555;
  }
`;
exports.CloseButton = styled_components_2.default.span `
  display: flex;
  justify-content: flex-end;
  font-size: 50px;
  padding-right: 10px;
`;
exports.Title = styled_components_2.default.div `
  font-size: 40px;
`;
exports.BoxContent = styled_components_2.default.div `
  border: 1px solid #555;
  width: 500px;
  height: 400px;
  margin-top: 50px;
  display: flex;
  border-radius: 10px;
`;
exports.Box = styled_components_2.default.div `
  display: flex;
  justify-content: center;
`;
exports.Btn = styled_components_2.default.button `
  background-color: #133b37;
  padding: 20px;
  width: 200px;
  color: white;
  margin: 20px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
exports.BtnDiv = styled_components_2.default.div `
  width: 500px;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 30px;
`;
exports.BtnLink = (0, styled_components_2.default)(react_router_dom_2.Link) `
  text-decoration-line: none;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
//# sourceMappingURL=Modal.js.map