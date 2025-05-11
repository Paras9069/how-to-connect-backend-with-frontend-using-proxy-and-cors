// server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file (if used)

const app = express();
app.use (express.static('dist'))

app.get('/', (req, res) => {
    res.send("Welcome to the root route.");
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Trust Issues",
            content: "Why don’t scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Sad Math Book",
            content: "Why did the math book look sad? Because it had too many problems."
        },
        {
            id: 3,
            title: "Buggy Nature",
            content: "Why don’t programmers like nature? It has too many bugs."
        },
        {
            id: 4,
            title: "Drunk Computer",
            content: "How does a computer get drunk? It takes screenshots."
        },
        {
            id: 5,
            title: "JavaScript Vision",
            content: "Why do JavaScript developers wear glasses? Because they don’t C#."
        }
    ];

    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
