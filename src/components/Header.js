import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="www.tesla.com">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu className="menu">
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="www.#">
              {car}
            </a>
          ))}
        {/* <a href="www.#">Model S</a>
        <a href="www.#">Model 3</a>
        <a href="www.#">Model X</a>
        <a href="www.#">Model Y</a> */}
      </Menu>

      <RightMenuWrap>
        <RightMenu className="menu">
          <a href="www.#">Shop</a>
          <a href="www.#"> Account</a>
        </RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenuWrap>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="www.#">{car}</a>
            </li>
          ))}
        <li>
          <a href="www.#">Existing Inventory</a>
        </li>
        <li>
          <a href="www.#">Used Inventory</a>
        </li>
        <li>
          <a href="www.#">Trade-In</a>
        </li>
        <li>
          <a href="www.#">Cyber-Truck</a>
        </li>
        <li>
          <a href="www.#">Solar Truck</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const RightMenuWrap = styled.div`
  display: flex;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
