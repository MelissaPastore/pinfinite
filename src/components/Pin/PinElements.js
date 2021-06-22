import styled from "styled-components";

export const PinWrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

export const PinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 230px;

  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    padding-bottom: 16px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const PinDetailsContainer = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  height: 100px;
  min-height: 0;
  min-width: 0;
  align-self: flex-start;
  height: 100%;
`;

export const PinDescription = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const Pinner = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
