import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 16px 4px 4px 16px;
  color: black;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  .MuiSvgICon-root {
    font-size: 35px;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: 50px;
  min-width: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
`;

export const TodayButton = styled(Buttons)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  :hover {
    background-color: #dadada;
  }
`;

export const HomeButton = styled(Buttons)`
  background-color: black;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
`;

export const SearchBarContainer = styled.div`
  background-color: #efefef;
  display: flex;
  height: 50px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 18px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

export const IconsContainer = styled.div``;
