import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'subjects',
  title: 'Subjects',
  type: 'document',
  fields: [
    defineField({
      name: 'titleFr',
      title: 'Title FR',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Title EN',
      type: 'string',
    }),
  ],
});
