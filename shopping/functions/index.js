const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51KiH0DSBADvdHuJLw29Vw5W2iTeRJtLP5GkmefUsGNHJpBQ8bI7887yjabBiWpdgUrKEYauwfRLYzETikQ9VZQff00IJPQhUwR')

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received Boom!!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/shopper-stop-8a21f/us-central1/api