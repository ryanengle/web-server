var express = require('express');
var app = express();
//var PORT = 3000;  // CAPS means it should be constant
var PORT = process.env.PORT || 5000;

var middleware = require('./middleware.js')
// location of this call matters -- attaching the middleware
// application level (every page) 
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// route level 
// middleware is 2nd param
// callback function is 3rd param
app.get('/about',middleware.requireAuthentication,  function (req, res) {
    res.send('About Us!');
})

// expose public folder
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server started on port: ' + PORT + '!');
});

