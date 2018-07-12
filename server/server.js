const express = require('express');
const hbs = require('hbs')

var app = express();
app.set('view server','hbs');

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentYear',() => {
  return new Date().getFullYear()
})

hbs.registerHelper('seamIt',(string) => {
  return string.toUpperCase();
})

app.use((req,res,next) => {
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`
  console.log(log);
  next();
})

// app.use((req,res,next) => {
//   res.render('maintenance.hbs',{
//     pageTitle:'Maintenace Page',
//     welcomeMessage:'Nothing here ...just some maintenace stuff'
//   })
//   // next();
// })

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:`Listen , Shut Up ,Pagal , Maha Pagal , Get Lost , Mr.Rude .., batamiz......####Bestie`,
  })
})



app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle:'About Us Page',
  })
})

app.listen(3000,()=>{
  console.log(`Site is Live on port 3000`);
})
