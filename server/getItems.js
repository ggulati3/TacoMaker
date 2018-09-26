const axios = require('axios')

var tacoItems = {
	shells: [],
	seasonings: [],
	mixins: [],
	baseLayers: [],
	condiments: []
};


var populate = function(item){
	return axios.get(` https://tacos-ocecwkpxeq.now.sh/${item}`).then( (value) => {
		return value.data.map( (elem) => {
			return elem.name
		})
	}).catch( (err) => {
		throw err;
	})
}

module.exports = populate;
