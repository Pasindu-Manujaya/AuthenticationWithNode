const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routers/AuthRouters');
const cookieParser = require('cookie-parser');
const { authMiddle } = require('./middleWare/AuthMiddle');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://manujaya-1:77MAnu88$@cluster0.pfrzzjw.mongodb.net/node-auth?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/',authMiddle, (req, res) => {res.render('home');


});
app.get('/smoothies',authMiddle, (req, res) => res.render('smoothies'));

app.use(routes);
//cookie

//app.get('/set-cookies',(req,res)=>{
  //res.setHeader('set-cookie','newUser=true');
 // res.cookie('newUser',false);
 // res.cookie('isEmployee',true,{maxAge: 1000*60*60*24,httpOnly:true});
 // res.send('you got the cookie');
//}
//)

//app.get('/read-cookie',(req,res)=>{
 // const cookies = req.cookies;
 // console.log(cookies.isEmployee);
 // res.json(cookies);
//})