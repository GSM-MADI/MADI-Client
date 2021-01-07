import styled from "styled-components";

export const Positioner = styled.div`
  background-color: #f9f9f9;
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SideBarWrapper = styled.div`
  width: 15%;
  height: 95%;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 85%;
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
