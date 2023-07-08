import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'presentation',
  type: 'object',
  title: 'Presentation',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Section Title EN',
      type: 'string',
    }),
    defineField({
      name: 'titleFr',
      title: 'Section Title FR',
      type: 'string',
    }),
    defineField({
      name: 'textEn',
      title: 'Rakonto description EN',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'textFr',
      title: 'Rakonto description FR',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(600)
          .error('A text of max. 600 characters is required'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
});
