// Creating a variable in js , Var is global scoped but can be redeclared
var one = 1;
var one =2
// can't declare 'one" with let again . 
console.log("Hello wordl")


function student(name , age){
    this.name = name ;
    this.age = age ;

}

let hasnain = new student("hasnain shahzad", 21);

console.log(hasnain)

// defining a funciton in js
 
let sum = (x, y) =>{
    console.log(x+y)
}
sum(5,6)
 
// for string function refer to wiki or Onedrive 
 
let advice = "This is a random adviece !! BOom ! "
console.log(advice)

// Defining an array 
 
let arr = [1,2,"hasnain shahzad" ,hasnain]

arr.push(69) // just a random numer :p
console.log(arr)

// Looping Through Array 
let increment_index_to_the_Value = (x,i)=>{
    return x+i;
}
arr =arr.map(increment_index_to_the_Value)
// or can also create the same way just like i have mentioned for the "for each loop"

arr.forEach((x, i)=>{
    console.log(`${x} and index is ${i}`)


})

