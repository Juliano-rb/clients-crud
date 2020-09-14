const typeorm = require('typeorm');

module.exports = new typeorm.EntitySchema({
  name: 'Tag',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    color: {
      type: 'varchar',
    },
  },
});
