// TYPES
import { SplitScreenProps } from './SplitScreen.types';

// STYLES
import { Container, Panel } from './SplitScreen.styles';

/**
 * Enhanced split-screen layout component that divides the screen into two equal panels.
 *
 * This component implements a flexible two-column layout system using a composition pattern,
 * allowing consumers to inject any React content into either panel. It's particularly useful
 * for dashboard layouts, comparison views, master-detail interfaces, or any scenario requiring
 * side-by-side content presentation.
 *
 * @component
 * @example
 * // Basic usage with simple content
 * <SplitScreenLayoutEnhanced
 *   LeftSection={<UserProfile />}
 *   RightSection={<UserSettings />}
 * />
 *
 * @example
 * // Usage with complex nested components
 * <SplitScreenLayoutEnhanced
 *   LeftSection={
 *     <div>
 *       <SearchBar />
 *       <ItemList items={items} />
 *     </div>
 *   }
 *   RightSection={<ItemDetails selectedItem={selectedItem} />}
 * />
 *
 * @example
 * // Partial usage - only left section provided
 * <SplitScreenLayoutEnhanced
 *   LeftSection={<Navigation />}
 *   // RightSection will show "Right Section" fallback text
 * />
 *
 * @param props - The component properties
 * @param props.LeftSection - Optional React element to render in the left panel.
 *                           If not provided, displays "Left Section" as fallback text.
 * @param props.RightSection - Optional React element to render in the right panel.
 *                            If not provided, displays "Right Section" as fallback text.
 *
 * @returns A JSX element containing two panels arranged in a split-screen layout
 *
 * @remarks
 * - Both panels will typically have equal width (implementation depends on Container/Panel styles)
 * - Fallback text serves as visual placeholders during development and helps identify missing content
 * - The component is designed to be responsive, though specific breakpoint behavior depends on the underlying styled components
 * - Consider providing loading states or empty state components instead of relying solely on fallback text in production
 *
 * @see {@link SplitScreenProps} for the TypeScript interface definition
 * @since 1.0.0
 */
export const SplitScreenLayout = ({LeftSection, RightSection}: SplitScreenProps) => {
  return (
    <Container>
      <Panel>
        {LeftSection ? LeftSection : "Left Section"}
      </Panel>

      <Panel>
        {RightSection ? RightSection : "Right Section"}
      </Panel>
    </Container>
  );
};