const getRepository = require('typeorm').getRepository;
const Client = require('../models/Client.js');

const ClientController = {
  async list(req, res) {
    const repo = getRepository(Client);
    const client = await repo.find();
    return res.json(client);
  },
  async add(req, res) {
    try {
      const repo = getRepository(Client);
      const client = await repo.save(req.body);

      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async find(req, res) {
    try {
      const clientId = req.params.id;
      console.log(req.params.id);
      const repo = getRepository(Client);
      const client = await repo.findOne(clientId);
      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
};

module.exports = ClientController;
