const express = require('express')
const app = express()

// Routes create krna
/* app.get(route, requestHandler) */

// app.get('/', function (req, res) {
//   res.send('Hello d');
// })
// app.get('/profile',function(req,res){
//     res.send("Hlo bro ");
// })
// app.listen(3000);


//for middleware
//sabse pehle ye chalega 
// app.use(function(req,res,next){
//     console.log('Middleware chala');
//     next();
// }); 

// app.use(function(req,res,next){
//     console.log('Middleware chala ek or barr');
//     next();
// }); 

app.get("/profile",function(req,res,next){
   return next(new Error("Something went wrong"))
});

app.use((err, req, res, next) => {
     console.error(err.stack); 
     res.status(500).send('Something broke!'); });

app.get('/', function (req, res) {
       res.send('champion');
    })
app.get("/about",function(req,res){
    res.send("about page hai ye")
})
app.listen(3000);
