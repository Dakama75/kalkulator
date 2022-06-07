const { request } = require('express');
const { response } = require('express');
const express = require('express');
const { DEC8_BIN } = require('mysql/lib/protocol/constants/charsets');
const Datastore = require('nedb')

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('witryna'));
app.use(express.json({ limit: '100mb' }));

const database = new Datastore('database.db');
database.loadDatabase();


app.get('/api', (request, response) => {
        database.find({}, (err, data) =>{
          response.json(data);
        })
      });

      app.get('/api2', (request, response) => {
        database.find({lon: /a/}, (err, name) =>{
          response.json(name);
        })
        })

      
      

app.post('/api', (request, response) => {
  const data = request.body;
  database.insert(data);
  console.log(database);
  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon,
  });
});
