import React from "react";
import {
  MenuLink,
  Title,
  Type,
  Img,
  CardImg,
  Container,
  Button,
  Logo,
  LogoWrap,
} from "../styles/Main";
const Main = () => {
  return (
    <Container>
      <LogoWrap>
        <Logo src="https://i.ibb.co/sj77nQ4/removebg-preview.png" />
      </LogoWrap>
      <Button>
        <MenuLink to="javascript:void(0)">
          <Type>
            <Img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg" />
            <Title>음료</Title>
          </Type>
        </MenuLink>
        <MenuLink to="javascript:void(0)">
          <Type>
            <Img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[5110007181]_20210421164728664.jpg" />
            <Title>디저트</Title>
          </Type>
        </MenuLink>
      </Button>
      <Button>
        <MenuLink to="javascript:void(0)">
          <Type>
            <Img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/07/[11108699]_20200724095028789.jpg" />
            <Title>굿즈</Title>
          </Type>
        </MenuLink>{" "}
        <MenuLink to="javascript:void(0)">
          <Type>
            <CardImg src="https://image.istarbucks.co.kr/cardImg/20220315/008947_WEB.png" />
            <Title>기프트카드</Title>
          </Type>
        </MenuLink>
      </Button>
    </Container>
  );
};

export default Main;
