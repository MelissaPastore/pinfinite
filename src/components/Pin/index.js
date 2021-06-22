import React from "react";
import {
  PinWrapper,
  PinContainer,
  PinDetailsContainer,
  PinDescription,
  Pinner,
} from "./PinElements";

const Pin = ({ pin }) => (
  <PinWrapper>
    <PinContainer>
      <img src={pin.images.orig.url} alt={pin.description} />
      <PinDetailsContainer>
        <PinDescription>{pin.title}</PinDescription>
        <Pinner>{pin.pinner.username}</Pinner>
      </PinDetailsContainer>
    </PinContainer>
  </PinWrapper>
);

export default Pin;
