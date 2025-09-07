import { ReactNode } from 'react';

export interface ISectionContent {
  id?: number;
  path?: string;
  title?: string;
  element?: ReactNode;
  children: ISectionContent[] | []
}