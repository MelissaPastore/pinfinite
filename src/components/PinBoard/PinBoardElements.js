import styled from "styled-components";

export const PinWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 500px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

export const PinContainer = styled.div`
  background-color: white;
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;

  @media (min-width 0px) and (max-width: 755px) {
    max-width: 504px;
    column-count: 2;
  }

  @media (min-width 756px) and (max-width: 1007px) {
    max-width: 756px;
    column-count: 3;
  }

  @media (min-width 1008px) and (max-width: 1259px) {
    max-width: 1008px;
    column-count: 4;
  }
  @media (min-width 1260px) and (max-width: 1511px) {
    max-width: 1260px;
    column-count: 6;
  }
`;
