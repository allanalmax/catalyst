const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'pug');
app.set('views', `./views`);


app.get('/', function(req, res){
    //1. Can come from vied if it has a form
    //2. A rest paramter
    //3. from the database
    res.render('loops',{
        fruits: ["Applie", "Berry", "Cherry"]
    });
 });

app.listen(port, function(){
    console.log(`App has started on port ${port}`)
})
