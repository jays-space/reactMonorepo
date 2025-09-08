// TYPES
import { IHomePage } from '@pages';

// COMPONENTS
import { SectionContent } from '@components';

const HomePage = ({tableOfContents}: IHomePage) => {
  return (
    <div role="navigation">
      <ol>
        <SectionContent children={tableOfContents} />
      </ol>
    </div>
  );
};

export default HomePage;