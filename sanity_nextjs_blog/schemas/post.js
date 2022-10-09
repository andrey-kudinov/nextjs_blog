export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    {
      name: 'meta',
      title: 'Meta'
    },
    {
      name: 'title',
      title: 'Title'
    },
    {
      name: 'title',
      title: 'Title'
    },
    {
      name: 'publishDate',
      title: 'Publish Date'
    },
    {
      name: 'image',
      title: 'Image'
    },
    {
      name: 'slug',
      title: 'Slug'
    },
    {
      name: 'description',
      title: 'Description'
    },
    {
      name: 'body',
      title: 'Content'
    }
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta Title',
      validation: f => f.required(),
      group: 'meta'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: f => f.required(),
      group: 'title'
    },
    {
      name: 'publishDate',
      type: 'string',
      title: 'Publish Date',
      validation: f => f.required(),
      group: 'publishDate'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: f => f.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution'
        }
      ],
      group: 'image'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: f => f.required(),
      group: 'slug'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: f => f.required(),
      group: 'description'
    },
    {
      title: 'Body content',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: f => f.required(),
      group: 'body'
    }
  ]
}
