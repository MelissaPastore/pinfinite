import React from "react";
import Pin from "../Pin";
import { PinWrapper, PinContainer } from "./PinBoardElements";

const PinBoard = () => {
  return (
    <PinWrapper>
      <PinContainer>
        <Pin />
      </PinContainer>
    </PinWrapper>
  );
};

export default PinBoard;
