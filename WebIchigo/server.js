const config = require("./config.json");
const morgan = require("morgan");
const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("short"));
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const apiRoute = require('./routes/api');

app.use("/api", apiRoute)

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/commands", function (req, res) {
  res.render("commands.ejs");
});

app.get("/projects", function (req, res) {
  res.render("projects.ejs");
});

app.get("/yandex_90e3455b5add228f.html", function (req, res) {
  res.render("yandex_90e3455b5add228f.html.ejs");
});

app.get("/news", function (req, res) {
  res.render("news.ejs");
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile('/assets/logo.png', { root: __dirname });
});

app.get("/support", function (req, res) {
  res.redirect(config.supportServer);
});

app.get("/online", function (req, res) {
  res.redirect(config.onlineServer); 
});

app.get("/invite", function (req, res) {
  res.redirect(config.botInvite);
});

app.get("/musicbot", function (req, res) {
  res.redirect(config.botMusic);
});

app.get('/logo.png', (req, res) => {
  res.sendFile('/assets/logo.png', { root: __dirname });
});

app.get('*', function(req, res){
  res.status(404).render("404.ejs")
});


app.use(function(err, req, res, next) {
  console.error('ERROR ', err.stack);
  res.status(500).render('500.ejs');
});


var listener = app.listen(config.port || process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});