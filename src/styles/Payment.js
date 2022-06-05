"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDiv = exports.CompleteDiv = exports.CancelBtn = exports.CancelBtnDiv = exports.SmallBtn = exports.SmallBtnDiv = exports.BigBtn = exports.BigBtnDiv = exports.Title = void 0;
const styled_components_2 = __importDefault(require("styled-components"));
exports.Title = styled_components_2.default.div `
  color: #555;
  font-size: 40px;
`;
exports.BigBtnDiv = styled_components_2.default.div `
  display: flex;
  width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
exports.BigBtn = styled_components_2.default.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
  height: 20px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 10px;
  margin: 20px;
  color: #fff;
  background-color: rgba(19, 59, 55, 0.8);

  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
exports.SmallBtnDiv = styled_components_2.default.div `
  display: flex;
  width: 800px;
  justify-content: center;
  align-items: center;
`;
exports.SmallBtn = styled_components_2.default.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 25%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  margin: 20px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
exports.CancelBtnDiv = styled_components_2.default.div `
  display: flex;
  width: 800px;
  justify-content: center;
  align-items: center;
`;
exports.CancelBtn = styled_components_2.default.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 20%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  margin: 10px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
exports.CompleteDiv = styled_components_2.default.div `
  color: #555;
  font-size: 50px;
  margin-top: 50px;
`;
exports.ContentDiv = styled_components_2.default.div `
  color: #555;
  font-size: 30px;
  margin-top: 100px;
`;
//# sourceMappingURL=Payment.js.map