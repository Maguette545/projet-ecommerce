const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()
const routers = require('./Routers/Routes')

// Creation d'un instance de server
const app = express();

//midd
app.use(cors({
  origin: 'http://localhost:3000', // ou '*' pour toutes les origines (moins sécurisé)
  credentials: true
}));
app.use(express.json());

//Gestion d'erreur de la base de donnée
mongoose.connect(process.env.MONGO_URI)
.then(() => 
    console.log('Connection à la base de donnée réussie')
).catch((err) => 
    console.log('Erreur de connection à la base de donnée', err)   
);

//app.get("/", (req, res) => {res.send('server bien demarée')})
//Les routes
app.use('/api', routers)

// Le port par laquelle la route passe
const port = 5011

app.listen(port, () => {
    console.log(`Le server répond au port, ${port}`)
})
