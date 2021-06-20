import React from "react";
import Pin from "../Pin";
import InfiniteScroll from "react-infinite-scroll-component";
import { PinWrapper, PinContainer } from "./PinBoardElements";

const PinBoard = ({ pins, getPins }) => {
  const hasMore = pins.length <= 5000 ? true : false;

  return (
    <PinWrapper>
      <InfiniteScroll
        dataLength={pins.length}
        next={getPins}
        hasMore={hasMore}
        loader={<h2>Loading more pins...</h2>}
        endMessage={<p>You've seen all the pins!</p>}
      >
        <PinContainer>
          {pins.map((pin, i) => {
            return <Pin key={i} pin={pin} />;
          })}
        </PinContainer>
      </InfiniteScroll>
    </PinWrapper>
  );
};

export default PinBoard;
