// express code to serve tracking pixel

var express = require('express');
var app = express();

app.get('/pixel.gif', function(req, res) {
  res.sendFile('pixel.gif', {root: __dirname});
  const campaign = req.query?.campaign;
  // log details of request
  console.log('pixel requested by ' + req.ip);
  console.log('pixel requested at ' + new Date());
  console.log('pixel requested for campaign ' + campaign);
  // send pixel
  console.log('pixel sent to ' + req.ip);
})

app.listen(5003);
