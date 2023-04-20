const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 2900;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('./'));

app.post('/submit', (req, res) => {
    const data = req.body;
    if (data.first_name != undefined) {
        console.log(data.first_name + ' ' 
            + data.last_name + ' has sent you a message');
        // send user message to database here
    }
    res.sendFile(__dirname + "/submit.html");
});

app.listen(2900, () => {
    console.log('accepting requests on port ' + port);
});
