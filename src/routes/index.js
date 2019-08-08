//Export router for the index main 

const { Router } = require('express');
const router = Router();

//send json 
router.get('/', (req, res) =>{
	res.json({"title": "Hello world"});
});

//send a json to the storage in a variable

router.get('/test', (req, res) =>{
	const data = {
		"title" : "Hello human",
		"subtitle" : "I live in your mind"
	}
	res.json(data);
});

module.exports = router;