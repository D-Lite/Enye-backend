const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser= require('body-parser');
require('dotenv/config');
// const fetch = require('node-fetch');

app.use(bodyParser.json());

//Routes 
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});
 

// const apiRoute = 'CAD';

// app.get('/', async (req, res) => {
//     try {
//     //   const { apiRoute } = req.params
//       const apiResponse = await fetch(
//         'https://api.exchangeratesapi.io/latest'  
//       )
//       const apiResponseJson = await apiResponse.json()
//       // await db.collection('collection').insertOne(apiResponseJson)
//       console.log(apiResponseJson)
//       res.send('Done – check console log')
//     } catch (err) {
//       console.log(err)
//       res.status(500).send('Something went wrong')
//     }
//   })


//Connect to DB
mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true },  
    () => { 
        console.log('Connected to DB')
    }
)

//Listener
app.listen(3030);