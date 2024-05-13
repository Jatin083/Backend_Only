const fs = require('fs');

//create and write file
fs.writeFile("hey.txt","hey hello kaise ho",function(err){
    if(err) console.error(err);
    else console.log("done");
})

//append or add things in file
fs.appendFile("hey.txt"," m too acha hu",function(err){
    if(err) console.error(err);
    else console.log("done");
})

//Rename file
fs.rename('hey.txt',"hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

//copy file
fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

/* delete krne ke liye file ko uper 
 valo ko comment krna padega pehke */
fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

//folder ko remove krne ke liye rmdir ki jgh rm bhi likh sakte h 
fs.rmdir("./copy",{recursive: true},function(err){
    if(err) console.error(err);
    else console.log("done");
})
