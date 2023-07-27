import { type } from 'os';
import { title } from 'process';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'presentation',
  type: 'object',
  title: 'Presentation',
  fields: [
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
      name: 'contentType',
      title: 'ContentType',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'nameFr',
              title: 'NameFr',
              type: 'string',
            }),
            defineField({
              name: 'nameEn',
              title: 'NameEn',
              type: 'string',
            }),
            defineField({
              name: 'descriptionFr',
              title: 'DescriptionFr',
              type: 'text',
            }),
            defineField({
              name: 'descriptionEn',
              title: 'DescriptionEn',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
