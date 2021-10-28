const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'pug');
app.set('views', `./views`);


app.get('/', function(req, res){
    res.render('dynamic2', {
        user: { name: "Godwin", email: "g.bbale@gmail.com", phone: "2567877282"},
        url: "https://wwww.myurl.com"
    });
 });

app.listen(port, function(){
    console.log(`App has started on port ${port}`)
})

