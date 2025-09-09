import { SplitScreenLayout } from '../../layouts';
import { SplitScreenShowcaseProps } from './SplitScreenShowcase.types';
import { SplitScreenLayoutEnhanced } from '../../layouts/SplitScreenEnhanced';

const LeftSideComponent = () => {
  return (
    <p style={{ backgroundColor: 'orangered' }}>
      I am the left side component.
    </p>
  );
};

const RightSideComponent = () => {
  return (
    <p style={{ backgroundColor: 'thistle' }}>I am the right side component.</p>
  );
};

export const SplitScreenShowcase = ({ enhanced }: SplitScreenShowcaseProps) => {
  return enhanced ? (
    <SplitScreenLayoutEnhanced
      options={{
        leftSection: {
          flex: 1,
        },
        rightSection: {
          flex: 3,
        },
      }}
    >
      {null}
      {/*<LeftSideComponent/>*/}
      <RightSideComponent />
    </SplitScreenLayoutEnhanced>
  ) : (
    <SplitScreenLayout
      LeftSection={<LeftSideComponent />}
      RightSection={<RightSideComponent />}
    />
  );
};