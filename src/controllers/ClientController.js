const getRepository = require('typeorm').getRepository;
const Client = require('../models/Client.js');
const Tag = require('../models/Tag.js');

const ClientController = {
  async list(req, res) {
    try {
      const repo = getRepository(Client);
      // filtra os clientes se passar um filtro no body
      const client = await repo.find({
        where: req.body,
        relations: ['tags'],
      });

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
      const client = await repo.findOne({
        where: { id: clientId },
        relations: ['tags'],
      });
      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async delete(req, res) {
    try {
      const clientId = req.params.id;
      const repo = getRepository(Client);
      const client = await repo.findOne(clientId);

      if (!client) return res.json({ error: 'Client ' + clientId + ' does not exists' });

      repo.remove(client);
      return res.json({ success: 'Client ' + clientId + ' removed' });
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async update(req, res) {
    try {
      const newClient = req.body;

      const clientId = req.params.id;
      const repo = getRepository(Client);
      const client = await repo.findOne(clientId);

      if (!client) return res.json({ error: 'Client ' + clientId + ' does not exists' });

      client.name = newClient.name;
      client.email = newClient.email;
      if (newClient.tags) {
        client.tags = newClient.tags;
      }

      repo.save(client);

      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async addTag(req, res) {
    try {
      const { idClient, idTag } = req.params;

      const clientRepo = getRepository(Client);
      const client = await clientRepo.findOne({
        where: { id: idClient },
        relations: ['tags'],
      });

      const tagRepo = getRepository(Tag);
      const tag = await tagRepo.findOne(idTag);

      if (!client) return res.json({ error: 'Client ' + idClient + ' does not exists' });
      if (!tag) return res.json({ error: 'Tag ' + idTag + ' does not exists' });

      client.tags = [...client.tags, tag];

      clientRepo.save(client);

      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
  async removeTag(req, res) {
    try {
      const { idClient, idTag } = req.params;
      console.log(idClient, idTag);

      const clientRepo = getRepository(Client);
      const client = await clientRepo.findOne({
        where: { id: idClient },
        relations: ['tags'],
      });

      if (!client) return res.json({ error: 'Client ' + idClient + ' does not exists' });

      client.tags = client.tags.filter((tag) => tag.id != idTag);
      console.log(client);

      clientRepo.save(client);

      console.log(client);
      return res.json(client);
    } catch (e) {
      console.error(e);
      return res.json({ error: e });
    }
  },
};

module.exports = ClientController;
