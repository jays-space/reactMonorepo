import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// PAGES
import { ContentPage, ShowcasePage } from '@pages';

// CONSTANTS
import { tableOfContents } from '@constants';

export function App() {
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
      </nav>
      <ContentContainer>
        <Routes>
          <Route
            index
            path={'/'}
            element={<ContentPage tableOfContents={tableOfContents} />}
          />

          <Route
            index
            path="/"
            element={<ContentPage tableOfContents={tableOfContents} />}
          />
          <Route path={tableOfContents[1].path}>
            <Route
              index
              element={
                <ContentPage tableOfContents={tableOfContents[1].children} />
              }
            />
            <Route path={tableOfContents[1].children[0].path}>
              <Route
                index
                element={
                  <ContentPage
                    tableOfContents={tableOfContents[1].children[0].children}
                  />
                }
              />
              <Route
                path={tableOfContents[1].children[0].children[0].path}
                element={
                  <ShowcasePage
                    title={tableOfContents[1].children[0].children[0].title}
                    component={
                      tableOfContents[1].children[0].children[0].element
                    }
                  />
                }
              />
              <Route
                path={tableOfContents[1].children[0].children[1].path}
                element={
                  <ShowcasePage
                    title={tableOfContents[1].children[0].children[1].title}
                    component={
                      tableOfContents[1].children[0].children[1].element
                    }
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </ContentContainer>
    </>
  );
}

export default App;

const ContentContainer = styled.div`
  width: 100%;
`;