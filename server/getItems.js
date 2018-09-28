const axios = require('axios')

var tacoItems = {
	shells: [],
	seasonings: [],
	mixins: [],
	baseLayers: [],
	condiments: []
};

var populate = function(obj) {
	var promises = []
	for(var prop in obj){
		promises.push(axios.get(`https://tacos-ocecwkpxeq.now.sh/${prop}`))
	}

	return axios.all(promises).then( (arr) => {
		arr = arr.map((item) => item.data);
		
		arr = arr.map( (item) => item.map( (obj) => obj.name) )

		var count = 0;

		for(var prop in obj){
			obj[prop] = arr[count];
			count++
		}

		return obj

	})

}

module.exports = populate
