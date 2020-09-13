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
});
