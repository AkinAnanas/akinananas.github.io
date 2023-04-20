const express = require('express');
const app = express();
const port = 2900;

app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    // send user message to database here
    res.sendFile(__dirname + "/submit.html");
    console.log(req.body);
});

app.listen(2900, () => {
    console.log('accepting requests on port ' + port);
});
