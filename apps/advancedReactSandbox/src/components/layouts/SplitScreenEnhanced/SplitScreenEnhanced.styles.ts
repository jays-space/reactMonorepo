import styled from 'styled-components';
import { PanelProps } from './SplitScreenEnhanced.types';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Panel = styled.section<PanelProps>`
  flex: ${props => props.flex || 1};
`;

export const PanelEmpty = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: gray;
  opacity: 0.6;
`;