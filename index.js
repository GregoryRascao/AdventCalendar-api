const upload = require('./upload')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
app.post('/upload', upload);











// const express = require("express");
// const app = express();
// // const multer  = require('multer')
// const port = 5000;
// const routeur = express.Router();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// app.use( bodyParser.json() );
// // const handleForm = multer();
// app.use(cors());
// app.use('/api/', routeur);
// const mysql = require('mysql');
// //local mysql db connection
// const sql = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'Bloody-1',
//     database : 'image'
// });
// sql.connect(function(err) {
//     if (err) throw err;
// 		console.log(`Connected to database`);
// });
// routeur.post('/images', (req, res) => {
//     console.log(req.body)
// 	newMovie = req.body.data
// 	sql.query("INSERT INTO images set ?", newMovie, (err, res) => {
// 		if(err) {
// 				console.log("error: ", err);
// 				//result(err, null);
// 		} else {
// 				console.log(res.insertId);
// 				//result(null, res.insertId);
// 		}
// 	 });
//  })
// routeur.get('/images', (req, res) => {
// 	sql.query('SELECT * from images', (err, results) =>{
// 		if(err){
// 			res.status(500).send(`There is an error : ${err}`)
// 		} else {
// 			res.json(results)
// 		}
// 	})
// })
// app.listen( port, (err) => {
// 	if(err) {
// 		throw new Error(`There is an error : ${err}`);
// 	}
// 	console.log(`Listening on Port ${port}`)
// })