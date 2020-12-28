import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  10%{
    background-position: 0% 50%;
  }
`;

const flick = keyframes`  
  0%, 80%, 100%{
    opacity: 0;
  }
  30%, 50%{
    opacity: 1;
  }
`;

const Loading = styled.div`
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loading-dot {
    display: inline-block;
    background: linear-gradient(-90deg, #666, #999, #bbb, #fff);
    background-size: 600% 600%;
    animation: ${gradient} 1s infinite, ${flick} 1s infinite;
    line-height: 1;
    vertical-align: middle;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #000;
  }
  .loading-dot:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  .loading-dot:last-child {
    animation-delay: 0.4s;
  }

  .loading-dot:not(:last-child) {
    margin-right: 3px;
  }
`;

export default function () {
  return (
    <Loading>
      <div className="loading"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
    </Loading>
  );
}
