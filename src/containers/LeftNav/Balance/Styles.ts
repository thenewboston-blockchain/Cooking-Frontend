import styled from 'styled-components';

import {breakpoints, colors} from 'styles';

export const Amount = styled.div`
  color: ${colors.secondary};
  font-size: 20px;
  margin-left: 20px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 0 12px 24px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const Img = styled.img`
  height: 26px;
  width: 26px;
`;
