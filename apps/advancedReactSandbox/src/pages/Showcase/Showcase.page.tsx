// TYPES
import { IShowcasePage } from './Showcase.types';

const ShowcasePage = ({title = 'Untitled', component}: IShowcasePage) => {
  return (
    <div>
      <h3>{title}</h3>
      <section>
        {component ? component : "Add a component"}
      </section>
    </div>
  );
};

export default ShowcasePage;