import { SectionContentProps, SplitScreenShowcase } from '@components';

export const tableOfContents: SectionContentProps[] = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    element: undefined,
    children: [],
  },
  {
    id: 2,
    path: '/design-patterns',
    title: 'Design Patterns',
    element: undefined,
    children: [
      {
        id: 1,
        path: '/design-patterns/layout-components',
        title: 'Layout Components',
        element: undefined,
        children: [
          {
            id: 1,
            path: '/design-patterns/layout-components/screen-splitter',
            title: 'Screen Splitter',
            element: <SplitScreenShowcase />,
            children: [],
          },
          {
            id: 2,
            path: '/design-patterns/layout-components/screen-splitter-enhancement',
            title: 'Screen Splitter (Enhancement)',
            element: <SplitScreenShowcase enhanced />,
            children: [],
          },
        ],
      },
    ],
  },
];