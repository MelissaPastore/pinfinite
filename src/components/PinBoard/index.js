import React from "react";
import Pin from "../Pin";
import { PinWrapper, PinContainer } from "./PinBoardElements";

const PinBoard = ({ pins }) => {
  return (
    <PinWrapper>
      <PinContainer>
        {pins.map((pin) => {
          return <Pin key={pin.id} pin={pin} />;
        })}
      </PinContainer>
    </PinWrapper>
  );
};

export default PinBoard;
