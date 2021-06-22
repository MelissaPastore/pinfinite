import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Wrapper,
  LogoWrapper,
  HomeButton,
  TodayButton,
  SearchBarContainer,
  SearchContainer,
  IconsContainer,
} from "./HeaderBarElements";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SmsIcon from "@material-ui/icons/Sms";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FaceIcon from "@material-ui/icons/Face";

const HeaderBar = () => {
  const [input, setInput] = useState("");

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon color="secondary" size="large" />
        </IconButton>
      </LogoWrapper>
      <HomeButton>
        <a href="/">Home</a>
      </HomeButton>
      <TodayButton>
        <a href="/">Today</a>
      </TodayButton>
      <SearchContainer>
        <SearchBarContainer>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input
              type="text"
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                console.log("input", input);
              }}
            ></button>
          </form>
        </SearchBarContainer>
      </SearchContainer>
      <IconsContainer>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </IconsContainer>
    </Wrapper>
  );
};

export default HeaderBar;
