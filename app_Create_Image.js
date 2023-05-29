//Module laden
require("dotenv").config();                             //Lädt das dotenv-Modul 

const express = require('express');                     //Express Modul
const app = express();                                  //Eine Instanz der Express-App erstellen
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public")); 
app.use(express.json());                                //Anforderungen mit JSON-Daten zu parsen
app.use(express.urlencoded({extended:false}));

//OPENAI
const { Configuration, OpenAIApi } = require("openai"); //Lädt das OpenAI Modul
const configuration = new Configuration({
    organization: "org-1Q2Yri36ix52Mo5PBkAySuey",
    apiKey: process.env.OPENAI_API_KEY,                 //Lädt den API KEY aus .env
  }); 
const openai = new OpenAIApi(configuration);            //Erstellt eine Instanz der OpenAIApi-Klasse und die Configuration-Instanz übergeben

//Routen definieren

//GET
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname) + "/index.html");
});

app.get("/", (req, res) => {
  res.render("image", { imageUrl: "" });
});

//POST
app.post('/', async (req, res) => {
    try {
      const response = await openai.createImage({
        prompt: "A cute baby sea otter",
        n: 1,
        size: "256x256",
      });
  
      const generatedImageUrl = response.data.data[0].url;

      res.render("image", { imageUrl: generatedImageUrl });

      return res.status(200).json({
        success: true,
        data: generatedImageUrl,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response ? error.response.data : "Server Problem",
      });
    }
  });

// Server starten und auf Verbindungen lauschen
const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});