const postSchema = {
    type: 'object',
    properties: {
      userId: { type: 'integer' },
      id: { type: 'integer' },
      title: { type: 'string' },
      body: { type: 'string' }
    },
    required: ['userId', 'id', 'title', 'body']
  };
  
  const postListSchema = {
    type: 'array',
    items: postSchema
  };
  
  module.exports = { postSchema, postListSchema };