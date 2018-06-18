const express = require('express');
const database = require('./controllers/database');

const route = express.Router();

route.get('/mapdata', database.getMapData);
route.get('/details/:id', database.getDetails);
route.delete('/details/:id', database.deleteDetails);
route.post('/mapdata/reactivate', database.reactivateMapData);

module.exports = route;
