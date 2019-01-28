const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const compression = require('compression');
const request = require('request');
const { renderToString } = require('react-dom/server')
const React = require('react');
const DOMParser = require('dom-parser');
const fs = require('fs');

const fetch = require('node-fetch');
const getAllHTML = require('../index.html');

////////////////////////////////////////
//  Remote Server Endpoints
const service_urls = require('../service_urls.json');

let app = express();

let PORT = process.env.PORT || 3000;
let { AWS_carousel, AWS_description, AWS_similar } = require('../config')

let staticPath = path.join(__dirname, '../public');

////////////////////
//  Apply Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());


//Server Routes

// Static Files
app.use('/listing/static/', express.static(path.resolve(__dirname, '../public')));

/////////////////////
//  Render index.html from Template
app.get('/:id', (req, res) => {

  console.log("Request Received: ", req.params);
  const listingId = req.params.id;

  if (!listingId % 1 || listingId < 1 || listingId > 10000000) {
    res.sendStatus(407).json("Param not accepted")
  }


  request(AWS_carousel + '/' + listingId, function (request, response, component) {
    console.log('component:', component)
    res.send(getAllHTML(component))


  })
  // let component ="";

  // let 
  // let stream = fetch(AWS_carousel + '/' + listingId)

  // stream.on('data',chunk => component+= chunk.toString())
  // stream.on('end', ()=>{
});
   
    
 




// var getRemoteComponent = function (URI, callback) {
//   callback(fetch(URI))
// }



////////////////////////////////////////
//  Instantate Server
app.listen(PORT, err => {
  if (err) return console.log('Error starting server:', err);
  console.log('Succesfully started server on:', PORT);
  process.env.COUNTER = 0;
});
