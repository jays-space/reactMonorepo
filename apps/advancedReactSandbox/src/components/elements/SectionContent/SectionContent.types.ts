import { ReactNode } from 'react';

export interface SectionContentProps {
  id?: number;
  path?: string;
  title?: string;
  element?: ReactNode;
  children: SectionContentProps[] | [];
}