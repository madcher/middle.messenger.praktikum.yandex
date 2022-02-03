const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./build/'));

// Handle 500
app.use(function(error, req, res) {
    res.status(500);
    res.sendFile('./src/pages/Errors/500.html', {root: __dirname })
});

app.get('/500', function(req, res){
    res.status(500);
    res.sendFile('./src/pages/Errors/500.html', {root: __dirname })
});

// Handle 400
app.use(function(req, res) {
    res.status(400);
    res.sendFile('./src/pages/Errors/404.html', {root: __dirname })
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
