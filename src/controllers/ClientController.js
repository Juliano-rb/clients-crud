const getRepository = require('typeorm').getRepository;
const Client = require('../models/Client.js');

const ClientController = {
  async list(req, res) {
    const repo = getRepository(Client);
    const client = await repo.find();
    return res.json(client);
  },
};

module.exports = ClientController;
