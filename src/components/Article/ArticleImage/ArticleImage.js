import React from 'react';
import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import Image from 'gatsby-image';

const StyledImage = styled(Image)`
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-height: 200px;
  min-height: 200px;

  ${up('xl')} {
    ${({ large }) =>
      large &&
      css`
        width: 391px;
        max-height: unset;
        min-height: unset;
        border-top-left-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 4px;
      `}
  }
`;

const ArticleImage = ({ large, fluid }) => {
  return <StyledImage large={large} fluid={fluid} />;
};

export default ArticleImage;
