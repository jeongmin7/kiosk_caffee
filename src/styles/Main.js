"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardImg = exports.Img = exports.Title = exports.Type = exports.MenuLink = exports.Button = exports.Logo = exports.LogoWrap = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.Container = styled_components_1.default.div `
  width: 800px;
  margin: 100px auto;
`;
exports.LogoWrap = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
exports.Logo = styled_components_1.default.img `
  width: 200px;
`;
exports.Button = styled_components_1.default.div `
  width: 810px;
  height: 400px;
  display: flex;
  flex-grow: inherit;
`;
exports.MenuLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  text-decoration-line: none;
  color: #555;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
`;
exports.Type = styled_components_1.default.div `
  overflow: hidden;
  position: relative;
  width: 302px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 20px;
`;
exports.Title = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 10px;
`;
exports.Img = styled_components_1.default.img `
  width: 300px;
  height: 300px;

  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
exports.CardImg = styled_components_1.default.img `
  width: 300px;
  min-height: 300px;
  object-fit: contain;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
//# sourceMappingURL=Main.js.map