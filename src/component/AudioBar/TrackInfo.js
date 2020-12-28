import React from "react";
import styled from "@emotion/styled";

import { WhiteLink, GreyLink } from "../Link";
import { grey } from "../../pallete";
import { GhostGreyButton } from "../Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PictureInPictureAltIcon from "@material-ui/icons/PictureInPictureAlt";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TrackInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-align: left;
  }
`;

const Buttons = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${grey};

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

export default function AudioInfo(props) {
  const { title, artist } = props.music;

  return (
    <Wrapper>
      <TrackInfo>
        <WhiteLink href="#">{title}</WhiteLink>
        <GreyLink href="#">{artist}</GreyLink>
      </TrackInfo>
      <Buttons>
        <GhostGreyButton>
          <FavoriteBorderIcon />
        </GhostGreyButton>
        <GhostGreyButton>
          <PictureInPictureAltIcon />
        </GhostGreyButton>
      </Buttons>
    </Wrapper>
  );
}
