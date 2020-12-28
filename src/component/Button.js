import React from "react";
import styled from "@emotion/styled";
import { grey } from "../pallete";

const StyledBaseButton = styled.button`
  background: none;
  border: none;
  padding: 1em;

  &:focus {
    outline: none;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    fill: currentColor;
  }
`;

export const BaseButton = (props) => (
  <StyledBaseButton {...props}>
    <div>{props.children}</div>
  </StyledBaseButton>
);

export const GhostGreyButton = styled(BaseButton)`
  color: ${grey};

  &:hover {
    color: white;
  }
`;
