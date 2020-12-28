import React from "react";
import styled from "@emotion/styled";

import TrackInfo from "./TrackInfo";
import SubController from "./SubController";
import AudioPlayer from "../AudioPlayer";

const StyledAudioBar = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #282828;
  color: #b3b3b3;
  padding: 0 1em;

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const musics = [
  {
    title: "watching you",
    artist: "goldfather don, parental",
    src: "url"
  },
  {
    title: "life",
    artist: "modah, juju rogers",
    src: "url2"
  }
];

const url = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];

export default function AudioBar() {
  return (
    <StyledAudioBar>
      <div>
        <TrackInfo music={musics[0]} />
        <AudioPlayer url={url[0]} />
        <SubController />
      </div>
    </StyledAudioBar>
  );
}
