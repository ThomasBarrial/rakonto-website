import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInfos',
  title: 'Contact Informations',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'number',
    }),
  ],
});
