import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleProps {
  colorCode: string;
}

export const Positioner = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  overflow: hidden;
`;

export const AppListWrapper = styled.div`
  width: 15%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const AppInfoWrapper = styled.div`
  width: 85%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #8d8d8d;

  font-size: 20px;
  font-weight: bold;
  color: #787878;
`;

export const AppStateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const AppState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  border: 2px solid #3367d6;
  border-radius: 20px;
  margin: 7px;

  font-size: 13px;
  font-weight: 300;
  color: #3367d6;
`;

export const AppNameWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #d1d0d0;
  }
`;

export const SelectedAppNameWrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 80px;

  border-bottom: 3px solid #8d8d8d;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding-left: 70px;
`;

export const AppColor = styled.div<StyleProps>`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: ${(props) => props.colorCode};
  margin-right: 16px;
  margin-left: 45px;
`;

export const AppName = styled.div`
  font-weight: bold;
  padding-left: 5px;
  font-size: 20px;
  color: #000000;
  padding-bottom: 4px;
`;
