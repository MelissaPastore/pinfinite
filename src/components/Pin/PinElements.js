import styled from "styled-components";

export const PinWrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

export const PinContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 230px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`;
