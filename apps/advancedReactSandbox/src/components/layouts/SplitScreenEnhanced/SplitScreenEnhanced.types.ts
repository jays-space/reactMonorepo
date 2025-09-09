import { ReactNode } from 'react';

interface SplitScreenSectionProps {
  flex?: number;
}

type SplitScreenEnhancedChildType = ReactNode | null;

export interface SplitScreenEnhancedProps {
  options: {
    leftSection?: SplitScreenSectionProps;
    rightSection?: SplitScreenSectionProps;
  };
  children: [SplitScreenEnhancedChildType, SplitScreenEnhancedChildType];
}

export interface PanelProps {
  flex?: number;
  children?: ReactNode;
}