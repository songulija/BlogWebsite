//jshint esversion:6

const express = require("express");//require express, bodyparser and ejs to use them
const bodyParser = require("body-parser");
const ejs = require("ejs");

//just bunch of text that we are going to insert into our pages
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();//function that represents express

app.set('view engine', 'ejs');//use view engine ejs
//to use bodyparser we need this line everytime
app.use(bodyParser.urlencoded({extended: true}));
//our static files are in public folder, we have there css tell express that
app.use(express.static("public"));// our static files held in public folder

//when user goes to home route, it will trigger this callback function
app.get('/',function(req,res){
  //then render home.ejs file, this is result that we send back
  res.render('home',{homeStartContent:homeStartingContent});//pass in value for home.ejs marker(homeStartContent)
  //we give value homeStartingContent, its js object we pass. so we have key and value for that key
});

//when going to about route trigger this callback function
app.get('/about', function(req,res){
  res.render('about',{AboutStartContent:aboutContent});//pass in value for about.ejs marker(AboutStartContent)
  //we give value aboutContentl, its js object we pass. so we have key and value for that key
});

app.get('/contact', function(req,res){
  res.render('contact',{ContactStartContent:contactContent});//pass in value for contact.ejs marker(ContactStartContent)
  //we give value contactContent, its js object we pass. so we have key and value for that key
});


//start server at port 3000, listen to any HTTP request at server 3000
app.listen(3000, function() {//once server logging then trigger this function
  console.log("Server started on port 3000");
});
