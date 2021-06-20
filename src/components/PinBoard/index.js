import React from "react";
import Pin from "../Pin";
import InfiniteScroll from "react-infinite-scroll-component";
import { PinWrapper, PinContainer } from "./PinBoardElements";

const PinBoard = ({ pins, getPins }) => {
  return (
    <PinWrapper>
      <InfiniteScroll
        dataLength={pins.length}
        next={getPins}
        hasMore={true}
        loader={<h2>Loading more pins...</h2>}
        endMessage={<p>No more pins!</p>}
      >
        <PinContainer>
          {pins.map((pin) => {
            return <Pin key={pin.id} pin={pin} />;
          })}
        </PinContainer>
      </InfiniteScroll>
    </PinWrapper>
  );
};

export default PinBoard;
