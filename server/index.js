const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

let response;
let exists = fs.existsSync('sheet.json');
if (exists) {
    // Read the file
    console.log('getting spread sheet');
    let txt = fs.readFileSync('sheet.json', 'utf8');
    // Parse it  back to object
    response = JSON.parse(txt);
} else {
    // Otherwise start with empty object
    console.log('No response');
    response = [];
}

function addSheet(req, res) {
    response = req.body;

    const reply = {
        status: 'success',
        content: response
    };
    console.log('adding: ' + JSON.stringify(reply));

    const json = JSON.stringify(response, null, 2);
    fs.writeFile('sheet.json', json, 'utf8', finished);
    function finished(err) {
        console.log('Finished writing sheet.json');
        res.send(reply);
    }
}

function getSheet(req, res) {
    res.send(response);
}

// A route for adding a new sheet
app.use('/api/add-sheet', addSheet);

// Route for retrieving sheet
app.get('/api/get-sheet', getSheet);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
