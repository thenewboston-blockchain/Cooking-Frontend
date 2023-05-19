import styled from 'styled-components';

import UCoinAmount from 'components/CoinAmount';
import UCopyContainer from 'components/CopyContainer';
import {colors, fonts} from 'styles';

export const ButtonContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CoinAmount = styled(UCoinAmount)`
  margin-top: 4px;
`;

export const Container = styled.div`
  background: rgb(224 231 237 / 32%);
  border-bottom: 1px solid ${colors.border};
  display: flex;
  padding: 24px 16px 24px;
`;

export const CopyContainer = styled(UCopyContainer)`
  background: #fcfcfc;
  border: 1px solid rgb(207, 217, 222);
  max-width: 300px;
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
  width: 180px;
`;

export const Label = styled.div`
  font-size: 12px;
  margin: 16px 0 4px;
`;

export const Left = styled.div``;

export const Name = styled.span`
  font-size: 24px;
  font-weight: ${fonts.weight.black};
  margin-top: 12px;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
`;

export const UserInformation = styled.div`
  margin-left: 24px;
`;
