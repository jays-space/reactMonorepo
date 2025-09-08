import { ISectionContent } from '@components';

export const tableOfContents: ISectionContent[] = [
  {
    id: 1,
    path: '/',
    title:'Home',
    element: undefined,
    children: []
  },
  {
    id: 2,
    path: '/design-patterns',
    title:'Design Patterns',
    element: undefined,
    children: [
      {
        id: 1,
        path: '/design-patterns/layout-components',
        title:'Layout Components',
        element: undefined,
        children: [
          {
            id: 1,
            path: '/design-patterns/layout-components/screen-splitter',
            title:'Screen Splitter',
            element: undefined,
            children: []
          },
        ]
      },
    ]
  },
]