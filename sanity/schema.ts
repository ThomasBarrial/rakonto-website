import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import navLinks from './schemas/navigationLinks';
import desktopNavlinks from './schemas/desktopNavifgationLink';
import socialMedia from './schemas/socialMedia';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    navLinks,
    desktopNavlinks,
    socialMedia,
  ],
};

export default schema;
