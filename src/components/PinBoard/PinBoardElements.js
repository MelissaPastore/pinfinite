import styled from "styled-components";

export const PinWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 15px;
`;

export const PinContainer = styled.div`
  background-color: white;
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;
  column-count: 6;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    column-count: 2;
  }

  @media only screen and (min-width: 769px) and (max-width: 1007px) {
    max-width: 721px;
    column-count: 3;
  }

  @media only screen and (min-width: 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    column-count: 4;
  }
  @media only screen and (min-width: 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    column-count: 5;
  }
`;
