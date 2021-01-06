import styled from "styled-components";
import { Link } from "react-router-dom";

export const Positioner = styled.div`
  position: fixed;
  border-bottom: 1px solid #d6d6d6;
  background-color: #ffffff;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 30;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

export const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  flex: 5;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled(Link)`
  margin-left: 5rem;
  width: auto;
  font-weight: 200;
  font-size: 20px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #00abfc;
    cursor: pointer;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AuthContent = styled(Link)`
  width: auto;
  font-weight: 200;
  font-size: 20px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #00abfc;
    cursor: pointer;
  }
`;
