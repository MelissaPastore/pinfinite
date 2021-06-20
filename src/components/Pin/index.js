import React from "react";
import { PinWrapper, PinContainer } from "./PinElements";

const Pin = ({ pin }) => (
  <PinWrapper>
    <PinContainer>
      <img src={pin.images.orig.url} alt={pin.description} />
    </PinContainer>
  </PinWrapper>
);

export default Pin;
