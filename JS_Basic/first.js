// fundamentals of javascrpit
// arrays and objects 
// functions return
// async js coding
// foreach map filter find indexOf Rest

var arr = [1,2,3,4];

/* foreach : array ke har ek element ke liye chijo ko run krna 
isme Array ke har ek element ke liye function run hoga*/

arr.forEach(function(val){
    console.log(val + " hello")
})

/* map: given array se ek aur array create krna chate ho 
tab map use hota h . isme arr ki values ek ek kr ke val me 
jayegi then ek ek krke vo val ko multiply krega 3 se and 
return krega new array ko */

var newarr = arr.map(function(val){
    return val*3;
})
console.log(newarr);


/* filter : isme filter krte krte h chijo ko isme 
har ek value val me aayegi then function run hoga 
chijo ke filter krne ke liye like kitne 2 se greater 
h kitne small h  */
var ans = arr.filter(function(val){
    if(val >= 2) { return true;}
    else return false;
})
console.log(ans)


/*find : hum find kr sakte h kisi element ko  */
var A = arr.find(function(val){
    if (val===2) return val;
})
console.log(A)


/* indexof: ye btata h ki uss elemnt ka index kya h agr 
element hoga to index dega , nhi to -1 dega.
-1 jab hi aayega jab vo element nhi h array me ya 
uska koi bhi index nhi h array me .
check karne ke liye isko browser ke console me likh dena hai sirf  */

arr.indexOf(2)


//object
/* iske andar hum kiii sare element and unki value 
ko store kr sakte h and console me jake jab hum obj.name 
likhenge tab tab vha name ki value aayegi ya fir hum 
obj['name'] bhi likh sakte h value return krega ye bhi  */

var obj = {
    name: "Jatin",
    age: 12
}
console.log(obj.name);
console.log(obj.age);

//obj.freeze se hum freeze krte h taki change na ho baad me 
Object.freeze(obj)

//function length
/*kisi bhi function me function ka type to function hi hota h 
lekin abcd h isme jaise vo object hota h aur hum function 
ki length bhi nikal sakte h isme 4 length h uski  
kehane ka matlab h hum function ki bhi length bta sakte hai */

function abcd(a,b,c,d){
}
console.log(abcd.length)


//function call : isme 87 line se 84 me jayega fir 85 me then uski value 
//84 me jake an me save ho jayegi

function YO(){
    return "hello world";
}
var an = YO();

// async js coding
// line by line code chale isey kahte hai synchronous
// jo bhi code async nature ka ho, usey side stack me bej do and agle code ko chlao jo bhi sync nature ka ho jab bhi sara syn code chal jaye, tab check kro ki async complete hua ya nhi agra hua h to main stack me lao or chla do

async function abcde(){
    var blob = await fetch(`https://randomuser.me/api/`)
    var C = await blob.json()
    console.log(C.results[0].name)
}
abcde();
