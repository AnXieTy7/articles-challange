const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 5000;
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(cors());

// Helper functions to read and write JSON data
const readData = (file) => {
    try {
        return JSON.parse(fs.readFileSync(file));
    } catch (error) {
        console.error(`Error reading ${file}: `, error);
        return [];
    }
};

const writeData = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
};

// API Endpoints
app.get('/articles', (req, res) => {
    const articles = readData('./articles.json');
    res.status(200).json(articles);
});

app.post('/articles', (req, res) => {
    const articles = readData('./articles.json'); // readData reads your JSON file and parses it

    // Assign a new, unique ID to the incoming article
    const newArticle = {
        id: uuidv4(), // Generate a unique ID for the article
        ...req.body
    };

    articles.push(newArticle); // Add the new article with the ID to the array
    writeData('./articles.json', articles); // writeData saves your JSON back to the file

    res.status(201).json(newArticle); // Respond with the newly created article, including its ID
});

app.get('/articles/:id', (req, res) => {
    const articles = readData('./articles.json');
    const article = articles.find(article => article.id === req.params.id);
    if (article) {
        res.status(200).json(article);
    } else {
        res.status(404).send('Article not found');
    }
});


app.get('/contacts', (req, res) => {
    const contacts = readData('./contacts.json');
    res.status(200).json(contacts);
});

app.post('/contacts', (req, res) => {
    const contacts = readData('./contacts.json');
    const newContact = { id: uuidv4(), ...req.body };
    contacts.push(newContact);
    writeData('./contacts.json', contacts);
    res.status(201).json(newContact);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
