const delay = 100;

const mapData = [
  { id: '123b', active: true, name: 'Rowan', vehicle: 'Suzuki Swift 2005', odometer: 220000, location: [45.5066927, -122.6890254] },
  { id: '321a', active: true, name: 'Jacob', vehicle: 'Audi R8 2018', odometer: 12, location: [45.5079108, -122.6890683] },
  { id: '231c', active: true, name: 'Sarah', vehicle: 'Toyota Carola 1999', odometer: 544000, location: [45.5083469, -122.6906347] },
];

exports.getMapData = ((req, res) => {
  setTimeout(() => {
    res.send(mapData.filter(data => data.active));
  }, delay);
});

exports.getDetails = ((req, res) => {
  let details;
  for (let i = 0; i < mapData.length; i += 1) {
    if (mapData[i].id === req.params.id) {
      details = mapData[i];
    }
  }
  setTimeout(() => {
    res.send(details);
  }, delay);
});

exports.deleteDetails = ((req, res) => {
  for (let i = 0; i < mapData.length; i += 1) {
    if (mapData[i].id === req.params.id) {
      mapData[i].active = false;
    }
  }
  res.send({
    status: 'success',
  });
});

exports.reactivateMapData = ((req, res) => {
  for (let i = 0; i < mapData.length; i += 1) {
    mapData[i].active = true;
  }
  res.send({
    status: 'success',
  });
});
