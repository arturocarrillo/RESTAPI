
const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('jsons spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
//send text 

//app.get('/', (req, res) => {
//	res.send('Hello world');
//});

//send json 

//app.get('/', (req, res) =>{
//	res.json({"title": "Hello world"});
//});

//import router of the other file 

app.use('/api/index',require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

//app.use(require('./routes/index'));
//app.use('/api/movies',require('./routes/movies'));



// starting the server
app.listen(app.get('port'), () => {
	console.log('Welcome RESTAPI 10byte')
    console.log(`Server on port ${app.get('port')}`);
});