# Projektarbeit

Das Ziel der Projektarbeit ist es, eine interaktive Anwendung zu entwickeln, die es Nutzern ermöglicht, den Inhalt realer 360 Grad Panoramabilder mithilfe vortrainierter KI-Modelle mittels Textbefehlen zu verändern.

## Zugriff auf die API von Open AI

Um nun die Verbindung zu der API von Open AI zu testen wird zunächst an einem einfachen Beispiel der Workflow gezeigt.

1. Installieren von Visual Code (VC)
2. Installieren von Node.js
3. Installieren von Express

### Beispielcode

Zuerst wird eine Javascript Datei in VC geöffnet.
```java script
// Express Module laden
const express = require('express');                     //Express Modul
const app = express();                                  //Eine Instanz der Express-App erstellen
app.use(express.json());                                //Anforderungen mit JSON-Daten zu parsen
```
Express ist ein Framework für Node.js, das die Entwicklung von Webanwendungen vereinfacht. Es bietet eine Reihe von Funktionen und Middleware, die es Entwicklern ermöglichen, schnell und effizient APIs, Webanwendungen und andere serverseitige Anwendungen zu erstellen.

```java script
//OpenAI Modul laden
require("dotenv").config();                             //Lädt das dotenv-Modul 
const { Configuration, OpenAIApi } = require("openai"); //Lädt das OpenAI Modul
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,                 //Lädt den API KEY aus .env
  });
const openai = new OpenAIApi(configuration);            //Erstellt eine Instanz der OpenAIApi-Klasse und die Configuration-Instanz übergeben
```
Dieser Code implementiert den API Key, dieser von Open AI generiert wird und über den eigenen Account zu Verfügung gestellt wird. 
require("dotenv").config() lädt das dotenv-Modul und ruft die config()-Funktion auf, um die Umgebungsvariablen aus der ".env"-Datei zu laden da der API-KEY nicht öffentlich sein soll.
Eine Instanz der Configuration-Klasse wird erstellt. Der API-Schlüssel für die OpenAI API wirf aus der Umgebungsvariable OPENAI_API_KEY gelesen, die zuvor aus der ".env"-Datei geladen wurde.
Eine Instanz der OpenAIApi-Klasse wird erstellt und die Configuration-Instanz übergeben. Es wird eine Verbindung zur OpenAI-API hergestellt und die openai Variable kann verwendet werden.

```java script
// Routen definieren
app.post('/', async (req, res) => {                                             //POST-Anfrage auf den Endpunkt /.req = request und res= response
    try{                                                                        //Beginn eines try-catch-Blocks zur Fehlerbehandlung
        const response = await openai.createCompletion({                        //Aufruf an die OpenAI-API, um Textgenerierung durchzuführen
            model: "text-davinci-003",                                          //Das Modell "text-davinci-003" wird verwendet
            prompt: "Hello OPEN AI API!",
            max_tokens: 7,
          });
          
    return res.status(200).json({                                               //Sendet eine erfolgreiche Antwort mit dem generierten Text an den Client.
            success: true,
            data: response.data.choices[0].text,
        });
    }catch(error){                                                              //Fangen von Fehlern, falls welche auftreten.
        return res.status(400).json({                                           //Fehlerantwort an den Client. Fehler wird aus der API-Antwort oder als allgemeine Fehlermeldung zurückgegeben.
            success: false,                                                     
            error: error.response
            ? error.response.data: "Server Problem",
        })
    }
});
```
Der Code definiert eine POST-Route für den Endpunkt "/". Die POST-Anfrage soll eine Textgenerierung mit Hilfe der OpenAI-API durchzuführen. Als Prompt wird eine Funktion übergeben, die zwei Zahlen addiert. Das Modell "text-davinci-003" wird verwendet, um die Generierung mit einer maximalen Tokenlänge von 1 durchzuführen. Die generierte Antwort wird als erfolgreiche JSON-Antwort an den Client zurückgesendet. Im Falle eines Fehlers wird eine Fehlerantwort mit der entsprechenden Fehlermeldung zurückgegeben.

```java script
// Server starten und auf Verbindungen lauschen
const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
```
Der Code startet den Express-Server und lässt ihn auf Verbindungen auf dem Port 3000 lauschen, wobei eine Konsolenausgabe "Server läuft auf Port 3000" erfolgt.

### Ausführen

Der Code wird nun in VC üner den Terminal gestartet. Dazu werden die folgenden Befehle ausgeführt.
```
npm install express dotenv openai
node app.js   
```

Nun wird über die Postman-Software die API Anfrage dokumentiert. Dazu wird eine neue Collection namens Localhost angelegt und in Variables ein New Response. Eine Post-Anfrage an http://localhost:3000 ergibt folgendes Ergebnis.

```Jason
{
    "success": true,
    "data": "\n\nHi there! Welcome to"
}
```
Aus der JASON-Antwort die API-Funktionalität ersichtlich.
