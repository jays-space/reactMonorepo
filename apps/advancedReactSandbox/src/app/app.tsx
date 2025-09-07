import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// PAGES
import { HomePage } from '../pages';

// CONSTANTS
import { tableOfContents } from '../constants';

export function App() {
  return (
    <ContentContainer>
      <Routes>
        <Route
          path="/"
          element={<HomePage tableOfContents={tableOfContents} />}
        />
      </Routes>
    </ContentContainer>
  );
}

export default App;

const ContentContainer = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;