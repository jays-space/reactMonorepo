// TYPES
import { SplitScreenEnhancedProps } from './SplitScreenEnhanced.types';

// STYLES
import { Container, Panel, PanelEmpty } from './SplitScreenEnhanced.styles';

/**
 * Enhanced split-screen layout component with configurable panel sizing and children-based content injection.
 *
 * This component creates a flexible two-column layout system where content is provided as children elements
 * and panel sizing can be controlled via configuration options. It uses array destructuring to assign
 * the first child to the left panel and the second child to the right panel, making it ideal for
 * predictable layout scenarios like master-detail views, comparison interfaces, or dashboard layouts.
 *
 * @component
 * @example
 * // Basic usage with equal panels (default flex behavior)
 * <SplitScreenLayoutEnhanced options={{ leftSection: {}, rightSection: {} }}>
 *   <UserProfile />
 *   <UserSettings />
 * </SplitScreenLayoutEnhanced>
 *
 * @example
 * // Custom flex ratios - left panel takes 1/3, right takes 2/3 of space
 * <SplitScreenLayoutEnhanced
 *   options={{
 *     leftSection: { flex: 1 },
 *     rightSection: { flex: 2 }
 *   }}
 * >
 *   <NavigationSidebar />
 *   <MainContent />
 * </SplitScreenLayoutEnhanced>
 *
 * @example
 * // Single child usage - second panel will show empty state
 * <SplitScreenLayoutEnhanced options={{ leftSection: {}, rightSection: {} }}>
 *   <SearchResults />
 *   {/* Right panel will display "Right Section" empty state *\/}
 * </SplitScreenLayoutEnhanced>
 *
 * @example
 * // Complex nested components with different sizing
 * <SplitScreenLayoutEnhanced
 *   options={{
 *     leftSection: { flex: 0.3 },
 *     rightSection: { flex: 0.7 }
 *   }}
 * >
 *   <div>
 *     <FilterPanel />
 *     <CategoryList />
 *   </div>
 *   <div>
 *     <ProductGrid />
 *     <ProductDetails />
 *   </div>
 * </SplitScreenLayoutEnhanced>
 *
 * @param props - The component properties
 * @param props.children - Array of React elements where the first element renders in the left panel
 *                        and the second element renders in the right panel. If fewer than 2 children
 *                        are provided, missing panels will display empty state components.
 * @param props.options - Configuration object for panel behavior and styling
 * @param props.options.leftSection - Configuration options for the left panel
 * @param props.options.leftSection.flex - CSS flex value controlling the left panel's size ratio.
 *                                         Higher values take more space relative to the other panel.
 * @param props.options.rightSection - Configuration options for the right panel
 * @param props.options.rightSection.flex - CSS flex value controlling the right panel's size ratio.
 *                                          Higher values take more space relative to the other panel.
 *
 * @returns A JSX element containing two panels with configurable sizing in a split-screen layout
 *
 * @remarks
 * - **Child Order Dependency**: The component relies on array destructuring, so child order matters.
 *   First child → left panel, second child → right panel.
 * - **Flex Behavior**: When flex values are provided, they work relative to each other (e.g., flex: 1 and flex: 2
 *   creates a 1:2 ratio). Default behavior depends on the Panel styled component implementation.
 * - **Empty States**: Uses dedicated `PanelEmpty` styled component for better visual hierarchy and styling
 *   control compared to plain text fallbacks.
 * - **Performance**: Consider memoizing complex child components to prevent unnecessary re-renders when
 *   only configuration options change.
 * - **Accessibility**: Ensure child components maintain proper semantic structure and ARIA attributes
 *   for screen readers navigating between panels.
 *
 * @throws {TypeError} Implicitly expects children to be an array-like structure for destructuring.
 * Single non-array children may cause runtime issues.
 *
 * @see {@link SplitScreenEnhancedProps} for the complete TypeScript interface definition
 * @see {@link Container} for the root container styling implementation
 * @see {@link Panel} for individual panel styling and flex behavior
 * @see {@link PanelEmpty} for empty state component styling
 *
 * @since 2.0.0
 * @version 2.0.0 - Refactored from prop-based to children-based API with configurable flex sizing
 */
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