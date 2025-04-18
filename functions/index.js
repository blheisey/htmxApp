/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const pug = require("pug");
// ;

// exports.about = onRequest((request, response) => {
//     let template = pug.compileFile("about.pug");
//     let markup = template();
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(markup);
// });

// exports.home = onRequest((request, response) => {
//     let template = pug.compileFile("home.pug");
//     let markup = template();
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(markup);
// });

// exports.contact = onRequest((request, response) => {
//     let template = pug.compileFile("contact.pug");
//     let markup = template();
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end(markup);
// });

const { onRequest } = require("firebase-functions/v2/https");
const pug = require("pug");
const axios = require("axios");


exports.test = onRequest((req, res) => {
    const template = pug.compileFile("views/test.pug");
    let markup = template({
      name: req.query.name,
      major: req.query.major,
      quote: req.query.quote
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(markup);
})

// exports.home = onRequest((req, res) => {
//     const template = pug.compileFile("index.pug");
//     const html = template();
//     res.status(200).send(html);
// });
// //comment
// exports.getWeatherHeading = onRequest(async (request, response) => {
//   let city = "Missoula";

//   try {
//     const apiKey = "832697448b834ed88ef224536250504"; // Replace with your real API key
//     const weatherApiUrl = ` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
//     const res = await axios.get(weatherApiUrl);

//     const data = res.data;
//     const template = pug.compileFile("weatherResult.pug");
//     const markup = template({
//       location: data.location.name,
//     });

//     response.status(200).send(markup);
//   } catch (err) {
//     const template = pug.compileFile("weatherResult.pug");
//     const markup = template({ error: "Could not fetch weather." });
//     response.status(500).send(markup);
//   }
// });




// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
