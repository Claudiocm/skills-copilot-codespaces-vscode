// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comments = [
  { id: 1, text: 'This is the first comment' },    
    { id: 2, text: 'This is the second comment' },
    { id: 3, text: 'This is the third comment' }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  const newComment = { id: comments.length + 1, text: req.body.text };
  comments.push(newComment);
  res.json(newComment);
});