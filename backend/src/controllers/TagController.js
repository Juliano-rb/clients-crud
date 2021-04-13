const getRepository = require('typeorm').getRepository;
const Tag = require('../models/Tag.js');

const TagController = {
  async list(req, res) {
    try {
      const repo = getRepository(Tag);
      // filtra as tags se passar um filtro no body
      const tag = await repo.find(req.body);

      return res.json(tag);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async add(req, res) {
    try {
      const repo = getRepository(Tag);
      const tag = await repo.save(req.body);

      return res.json(tag);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async find(req, res) {
    try {
      const tagId = req.params.id;
      console.log(req.params.id);
      const repo = getRepository(Tag);
      const tag = await repo.findOne(tagId);
      return res.json(tag);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async delete(req, res) {
    try {
      const tagId = req.params.id;
      const repo = getRepository(Tag);
      const tag = await repo.findOne(tagId);

      if (!tag) return res.json({ error: 'Tag ' + tagId + ' does not exists' });

      repo.remove(tag);
      return res.json({ success: 'Tag ' + tagId + ' removed' });
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async update(req, res) {
    try {
      const newTag = req.body;

      const tagId = req.params.id;
      const repo = getRepository(Tag);
      const tag = await repo.findOne(tagId);

      if (!Tag) return res.json({ error: 'Tag ' + tagId + ' does not exists' });

      tag.name = newTag.name;
      tag.color = newTag.color;
      repo.save(tag);

      return res.json(tag);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
};

module.exports = TagController;
