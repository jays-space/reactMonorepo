// TYPES
import { SplitScreenEnhancedProps } from './SplitScreenEnhanced.types';

// STYLES
import { Container, Panel, PanelEmpty } from './SplitScreenEnhanced.styles';

export const SplitScreenLayoutEnhanced = ({
  children,
  options: { leftSection, rightSection },
}: SplitScreenEnhancedProps) => {
  const [leftSectionComponent, rightSectionComponent] = children;

  return (
    <Container>
      <Panel flex={leftSection?.flex}>
        {leftSectionComponent ? (
          leftSectionComponent
        ) : (
          <PanelEmpty>Left Section</PanelEmpty>
        )}
      </Panel>

      <Panel flex={rightSection?.flex}>
        {rightSectionComponent ? (
          rightSectionComponent
        ) : (
          <PanelEmpty>Right Section</PanelEmpty>
        )}
      </Panel>
    </Container>
  );
};