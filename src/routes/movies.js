const { Router } = require ('express');
const router = Router();
const _ = require('underscore');

const movies = require("../routes/sample.json");


//get method to send json to the browser engine
router.get('/', (req, res) => {
	res.json(movies);
});

//post method to send data from mobile application method 1
//router.post('/', (req, res) => {
//	console.log(req.body);
//	res.send('received');
//});


//post method to send data from mobile application method 2
router.post('/', (req, res) => {
	const {title, director, year, rating} = req.body; //get the value of json
	if (title && director && year && rating) { //validation of the existence of value 
		const id = movies.length + 1; //create id
		const newMovie = {id, ...req.body}; //add the new id to the json string
		console.log(newMovie);
		movies.push(newMovie); //run the method
		res.json(movies) 
	} else {
		res.status(500).json({"Error": "There was an error (POST)"});
	}
});

//update method
router.put('/:id', (req, res) => {
	const { id } = req.params; //get id and storage value
	const {title, director, year, rating} = req.body;
	if (title && director && year && rating) {
		//traverse the array and store the new value to each parameter 
		_.each(movies, (movie, i) => { 
			if (movie.id == id) {
				movie.title = title;
				movie.director = director;
				movie.year = year;
				movie.rating = rating;
			}
		});
		res.json(movies);
	} else{
		res.status(500).json({"Error": "There was an error (UPDATING)"});
	}

});

//delete method
router.delete('/:id', (req, res) => {
	const { id } = req.params; //get id and storage value
	_.each(movies, (movie, i) => {
		if (movie.id == id) {
			movies.splice(i, 1);
		}
	});
	res.send(movies);
});

module.exports = router;