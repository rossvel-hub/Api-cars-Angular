const { Router } = require('express');
const router = Router();

const automoviles = require('../datos.json');

//Get
router.get('/', (req, res) =>
{
    res.set("Access-Control-Allow-Origin", "*");
    res.json(automoviles);
});

//Post
router.post('/', (req, res) =>
{
    const { name, description } = req.body;
    const id = automoviles.length + 1;
    const nuevoAuto = { id, ...req.body };
    automoviles.push(nuevoAuto);
    res.status(201).json(automoviles);
});

module.exports = router;