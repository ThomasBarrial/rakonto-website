import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import subjects from './schemas/subjects';
import articles from './schemas/articles';
import author from './schemas/author';
import navLinks from './schemas/navigationLinks';
import desktopNavlinks from './schemas/desktopNavifgationLink';
import socialMedia from './schemas/socialMedia';

// Home page content
import homePageContent from './schemas/homePage/homePageContent';
import presentation from './schemas/homePage/presentation';
import ourProjects from './schemas/homePage/ourProjects';
import ourLastestLastArticles from './schemas/homePage/ourLastestLastArticles';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    articles,
    author,
    subjects,
    blockContent,
    navLinks,
    desktopNavlinks,
    socialMedia,
    homePageContent,
    presentation,
    ourProjects,
    ourLastestLastArticles,
  ],
};

export default schema;
