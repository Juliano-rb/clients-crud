const getRepository = require('typeorm').getRepository;
const Client = require('../models/Client.js');

const ClientController = {
  async list(req, res) {
    try {
      const repo = getRepository(Client);
      // filtra os clientes se passar um filtro no body
      const client = await repo.find(req.body);

      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
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
  async delete(req, res) {
    try {
      const clientId = req.params.id;
      const repo = getRepository(Client);
      const client = await repo.findOne(clientId);

      repo.remove(client);
      return res.json({ success: 'Client ' + clientId + ' removed' });
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
};

module.exports = ClientController;
