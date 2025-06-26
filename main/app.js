const express=require("express");
const path=require('path');
const hb=require('express-handlebars');
const app=express();
const port=3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(require('./routes'))


app.engine('handlebars',hb.engine());
app.set('view engine','handlebars');


app.get('/',(req,res)=>{

    res.send('this is a quote generator');
}
);

app.listen(3000,console.log('this is the port 3000 for the quotes app'));
