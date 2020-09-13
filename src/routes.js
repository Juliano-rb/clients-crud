const express = require('express');

const routes = express.Router();

routes.get('/:param', (req, res)=>{
    return res.send(`<h1>Olá ${req.params.param} ( ͡° ͜ʖ ͡°)</h1>`)
});

module.exports = routes;