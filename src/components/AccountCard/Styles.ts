import styled from 'styled-components';

import {colors, fonts} from 'styles';

export const AccountNumber = styled.div`
  color: ${colors.secondary};
  font-size: 12px;
`;

export const Container = styled.div`
  display: flex;
`;

export const DisplayName = styled.div`
  font-weight: ${fonts.weight.bold};
  margin-bottom: 2px;
`;

export const Img = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 36px;
`;

export const Text = styled.div`
  margin-left: 10px;
`;
