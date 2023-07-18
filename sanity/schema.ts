import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import subjects from './schemas/subjects';
import articles from './schemas/articles';
import author from './schemas/author';
import navLinks from './schemas/navigationLinks';
import desktopNavlinks from './schemas/desktopNavifgationLink';
import socialMedia from './schemas/socialMedia';
import supportUscallToAction from './schemas/supportUscallToAction';
import pages from './schemas/pages';
import contactInfo from './schemas/contactInfo';
import partners from './schemas/partners';

// Home page content
import presentation from './schemas/homePage/presentation';
import ourProjects from './schemas/homePage/ourProjects';
import ourLastestLastArticles from './schemas/homePage/ourLastestLastArticles';
import ourOffers from './schemas/homePage/ourOffers';
import imagesGallery from './schemas/homePage/gallery';
import supportUs from './schemas/homePage/supportUs';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    supportUscallToAction,
    articles,
    author,
    subjects,
    blockContent,
    navLinks,
    desktopNavlinks,
    socialMedia,
    pages,
    presentation,
    ourProjects,
    ourLastestLastArticles,
    ourOffers,
    imagesGallery,
    supportUs,
    contactInfo,
    partners,
  ],
};

export default schema;
