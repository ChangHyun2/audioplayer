import styled from "@emotion/styled";

import { grey } from "../pallete";

export const BaseLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const WhiteLink = styled(BaseLink)`
  color: white;
`;

export const GreyLink = styled(BaseLink)`
  color: ${grey};

  &:hover {
    color: white;
  }
`;
