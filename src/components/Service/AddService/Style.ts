import styled from "styled-components";

interface StyleProps {
  isSelected: boolean;
}

interface LineProps {
  number: Number;
}

export const CreatedAppNameWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;

  border-bottom: 3px solid #8d8d8d;
  justify-content: flex-start;
  align-items: center;
  padding-left: 70px;
`;

export const CircleNumber = styled.div<StyleProps>`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${(props) => (props.isSelected ? "#94c993" : "#B7B7B7")};
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 13px;
  font-weight: 900;
  color: #ffffff;
`;

export const Title = styled.div`
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const TitleLine = styled.div<LineProps>`
  width: ${(props) => (props.number === 3 ? "0px" : "40px")};
  height: 0px;
  border: ${(props) => (props.number === 3 ? "0" : "2px solid #b7b7b7")};
  margin-left: 10px;
`;

export const AppInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 80px);
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AppContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4rem;
  margin-left: 4rem;
`;

export const AppTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  margin-left: 20px;
  margin-top: 30px;

  div {
    font-size: 18px;
    font-weight: 400;
  }

  input {
    margin-top: 20px;
    width: 600px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #9e9e9e;
    padding-left: 20px;
  }

  input:focus {
    transition-timing-function: ease-in;
    transition: border 0.2s;
    border: 2px solid #3367d6;
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  width: 180px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  bottom: 50px;
  right: 50px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    transition: all 1s, color 0.5s;
    color: white;
    box-shadow: 200px 0 0 0 #000000 inset, -200px 0 0 0 #000000 inset;
  }
`;

export const PreviousButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  width: 180px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  bottom: 50px;
  right: 260px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    transition: all 1s, color 0.5s;
    color: white;
    box-shadow: 200px 0 0 0 #000000 inset, -200px 0 0 0 #000000 inset;
  }
`;

export const AuthorityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 250px;
  margin-top: 100px;
  margin-left: 20px;
`;

export const Authority = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
`;

export const AuthorityTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;

  background-color: #f5f5f5;
`;

export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
`;

export const AuthText = styled.div`
  margin-left: 40px;
  flex: 1;
  font-size: 17px;
  line-height: 19px;
  color: #535353;
`;

export const AuthDescription = styled.div`
  margin-left: 40px;
  flex: 2;
  font-size: 17px;
  line-height: 19px;
  color: #535353;
`;
