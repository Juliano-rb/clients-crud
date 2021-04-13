const typeorm = require('typeorm');

module.exports = new typeorm.EntitySchema({
  name: 'Client',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
  relations: {
    tags: {
      target: 'Tag',
      type: 'many-to-many',
      joinTable: true,
      cascade: ['insert'],
    },
  },
});
