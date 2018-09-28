const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios')
const port = process.env.PORT || 3000;
const getItems = require('./getItems.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next){
  console.log(req.method, req.path);
  next();
})

app.use(express.static(path.join(__dirname, '../public')));

var tacoItems = {
	shells: [],
	seasonings: [],
	mixins: [],
	baseLayers: [],
	condiments: []
};

app.get('/taco/menu', (req, res) => {
	getItems(tacoItems).then( (obj) => {
		res.send(JSON.stringify(obj));
	})
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});