import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePageData',
  type: 'document',
  title: 'HomePage content',
  fields: [
    defineField({ name: 'title', title: 'Page name', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Page description',
      type: 'text',
    }),
    defineField({
      name: 'KeyWords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Sections',
      of: [
        defineArrayMember({
          name: 'presentation',
          title: 'Presentation',
          type: 'presentation',
        }),
        defineArrayMember({
          name: 'ourProjects',
          title: 'Our Projects',
          type: 'ourProjects',
        }),
        defineArrayMember({
          name: 'ourLastestArticles',
          title: 'Our Latest Articles',
          type: 'ourLastestArticles',
        }),
      ],
    }),
  ],
});
