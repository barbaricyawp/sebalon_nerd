var express = require('express'),
    app = express(),
    methodOverride = require('method-override');
    
var indexRoutes = require("./routes/index");
    
// MISC   
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started...");
});