// TYPES
import { ISectionContent } from './SectionContent.types';

// STYLES
import { Link } from './SectionContent.styles';

const SectionContentElement = ({children}: ISectionContent) => {
  return children.map(({id, path, title, children: sectionChildren}) => {
    return path && (
      <li key={`${id}-${path}`}>
        <Link to={path}>{title}</Link>
        {
          sectionChildren.length > 0 && (
            <ul>
              <SectionContentElement children={sectionChildren}/>
            </ul>
          )
        }
      </li>
    )
  })
};

export default SectionContentElement;