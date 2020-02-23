// var's are hoisted at the beginning. 
//This one works right, is typical
var a = "first";
var b = "secound";
var c = "third";

console.log ("a,b,c typical var's" + a + " " + b + " " + c)

//d is undefined because it is has no value
//and because it was hoisted above the console log
console.log ("d="+d);

var d;

//var e is undefined because
//the value is defined under the console log
console.log ("e="+e);
var e ="fifth";

//The value is stated above the console log
//so it works even though
//the var is declared under the console log
f = "fifth";

console.log ("f="+f);

var f;

//named function
function example () {
    var g = 10;
    return g;
}

console.log(example("example = " + example));

//named function is hoisted above the console log
console.log(example2("example 2 = " + example2));

function example2 () {
    var h = 12;
    return h;
}

//downside to hoisting is the name takes up more space
//which could slow the code down
//anon functions can be faster

//Anonymous Function
var j = function () {
    var i = 12;
    return i; 
}

console.log(j());

//anon function
//this is not hoisted
//console log can not see it because it is below
console.log(k());

var k = function () {
    var l = 12;
    return l; 
}
