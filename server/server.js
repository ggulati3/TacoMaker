const express = require('express');
const path = require('path');
const app = express();

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

app.get('/tacos/:item', (req, res) => {
	getItems(req.params.item).then ((value) => {
		res.send(JSON.stringify(value))
	})
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});