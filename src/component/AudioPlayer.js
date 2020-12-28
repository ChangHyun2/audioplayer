import React, { useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import Progress from "./Progressbar";
import { GhostGreyButton } from "./Button";
import Loading from "./Loading";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";

const StyledAudioPlayer = styled.div`
  flex: 1;
  padding: 0 2em;
  min-width: 200px;
  max-width: 600px;
`;

export const StyledController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAudioProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProgressWrapper = styled.div`
  flex: 1;
  height: 10px;
  padding: 0 10px;
`;

const PROGRESS_GAUGE = 100;

const secondsToMMSS = (seconds) => {
  const mm = Math.floor(seconds / 60);
  const ss = Math.floor(seconds % 60);

  return `${mm >= 10 ? mm : "0" + mm}:${ss >= 10 ? ss : "0" + ss}`;
};

export default function AudioPlayer({ url }) {
  const audio = React.useRef(new Audio(url));

  const progressRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [isLoadingAudio, setIsLoadingAudio] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAudio = () => {
    const playPromise = audio.current.play();
    setIsPlaying(true);

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("audio play");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const pauseAudio = () => {
    audio.current.pause();
    setIsPlaying(false);
  };
  const stopAudio = () => {
    audio.current.currentTime = 0;
    pauseAudio();
  };

  const handleMouseDownProgress = useCallback((value) => {
    console.log(
      `when mousedown, got ${value} from progressbar , outer set value`
    );

    setProgress(value);
  }, []);

  const handleChangeProgress = useCallback((value) => {
    console.log(
      `when mousemove, got ${value} from progressbar , outer set value`
    );

    setProgress(value);
  }, []);

  const handleMouseUpProgress = useCallback((value) => {
    audio.current.currentTime = value;
    audio.current.currentTime =
      (value / PROGRESS_GAUGE) * audio.current.duration;

    setProgress(value);
    playAudio();
  }, []);

  useEffect(() => {
    const onTimeupdate = () => {
      if (progressRef.current.dataset.isactive === "true") {
        console.log("active");
        return;
      }
      const seconds = audio.current.currentTime.toFixed(3);
      const duration = audio.current.duration;

      const audioProgress = seconds / duration;

      setProgress(audioProgress * PROGRESS_GAUGE);
    };

    const onLoadeddata = () => {
      setTimeout(() => {
        playAudio();
        setIsLoadingAudio(false);
      }, 1000);
    };

    audio.current.addEventListener("loadeddata", onLoadeddata);
    audio.current.addEventListener("timeupdate", onTimeupdate);
  }, []);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  return isLoadingAudio ? (
    <Loading />
  ) : (
    <StyledAudioPlayer>
      <StyledController>
        {isPlaying ? (
          <GhostGreyButton onClick={pauseAudio}>
            <PauseIcon />
          </GhostGreyButton>
        ) : (
          <GhostGreyButton onClick={playAudio}>
            <PlayArrowIcon />
          </GhostGreyButton>
        )}
        <GhostGreyButton onClick={stopAudio}>
          <StopIcon />
        </GhostGreyButton>
      </StyledController>
      <StyledAudioProgress>
        <div>
          {secondsToMMSS((progress / PROGRESS_GAUGE) * audio.current.duration)}
        </div>
        <StyledProgressWrapper>
          <Progress
            max={100}
            min={0}
            value={progress}
            ref={progressRef}
            onChange={handleChangeProgress}
            onMouseDown={handleMouseDownProgress}
            onMouseUp={handleMouseUpProgress}
            colors={{
              rail: "#555",
              ball: "none",
              train: "#aaa",
              active: {
                ball: "white",
                train: "rgb(29, 185, 84)"
              }
            }}
          />
        </StyledProgressWrapper>
        <div>{secondsToMMSS(audio.current.duration)}</div>
      </StyledAudioProgress>
    </StyledAudioPlayer>
  );
}
