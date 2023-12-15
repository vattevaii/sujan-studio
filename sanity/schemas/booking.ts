// appointmentRequest.js
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'booking',
  title: 'Appointment Request',
  type: 'document',
  fields: [
    defineField({
      name: 'needs',
      title: 'Needs',
      type: 'string',
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
    }),
    defineField({
      name: 'exactNeed',
      title: 'Exact Need',
      type: 'string',
      description: 'Exact details about the need',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street',
          type: 'string',
        }),
        defineField({
          name: 'zip',
          title: 'ZIP',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'prefer',
      title: 'Preferences',
      type: 'object',
      fields: [
        defineField({
          name: 'date',
          title: 'Date',
          type: 'string',
        }),
        defineField({
          name: 'startTime',
          title: 'Start Time',
          type: 'string',
        }),
        defineField({
          name: 'hours',
          title: 'Hours',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'personal',
      title: 'Personal Information',
      type: 'object',
      fields: [
        defineField({
          name: 'fullName',
          title: 'Full Name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'needs',
      subtitle: 'exactNeed',
    },
  },
});
