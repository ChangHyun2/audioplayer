import React from "react";
import styled from "@emotion/styled";
import { GhostGreyButton } from "../Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import DevicesIcon from "@material-ui/icons/Devices";

const StyledSubController = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em 3em 1em 1em;
`;

const Buttons = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    padding: 0.5em;
  }

  svg {
    width: 20px;
  }
  svg:hover {
    fill: white;
  }
`;

export default function SubController() {
  return (
    <StyledSubController>
      <Buttons>
        <GhostGreyButton>
          <FavoriteBorderIcon />
        </GhostGreyButton>
        <GhostGreyButton>
          <DevicesIcon />
        </GhostGreyButton>
        <GhostGreyButton>
          <VolumeUpIcon />
        </GhostGreyButton>
      </Buttons>
    </StyledSubController>
  );
}
