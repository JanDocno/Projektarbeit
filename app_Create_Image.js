// Module laden
const express = require('express');                     //Express Modul
const app = express();                                  //Eine Instanz der Express-App erstellen
app.use(express.json());                                //Anforderungen mit JSON-Daten zu parsen
require("dotenv").config();                             //Lädt das dotenv-Modul 
const { Configuration, OpenAIApi } = require("openai"); //Lädt das OpenAI Modul
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,                 //Lädt den API KEY aus .env
  });
const openai = new OpenAIApi(configuration);            //Erstellt eine Instanz der OpenAIApi-Klasse und die Configuration-Instanz übergeben

// Routen definieren
app.post('/', async (req, res) => {                                             //POST-Anfrage auf den Endpunkt /.req = request und res= response
    try{                                                                        //Beginn eines try-catch-Blocks zur Fehlerbehandlung
        const response = await openai.createImage({                             
        prompt: "A cute baby sea otter",
        n: 1,
        size: "256x256",
        });      

        const generatetdImageUrl = response.data.data[0].url;                   //Speichert die URL des Bildes

    return res.status(200).json({                                               //Sendet eine erfolgreiche Antwort mit dem generierten Text an den Client.
            success: true,
            data: generatetdImageUrl,
        });

    }catch(error){                                                              //Fangen von Fehlern, falls welche auftreten.
        return res.status(400).json({                                           //Fehlerantwort an den Client. Fehler wird aus der API-Antwort oder als allgemeine Fehlermeldung zurückgegeben.
            success: false,                                                     
            error: error.response
            ? error.response.data: "Server Problem",
        })
    }
});
    
// Server starten und auf Verbindungen lauschen
const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});