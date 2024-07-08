// *****************prototypal inheritance************

function makeHuman(name, age){
    this.name = name;
    this.age =age;  
}
 makeHuman.prototype.printMyName = function(){
    console.log(this.name);
} // add the functionninside the function using prototypal inheritance. 
const human1 = new makeHuman("aayush", 28);// gives the value of this inside the function as empty object. 
const human2 = new makeHuman("SHARMA", 8);


// ****************************************closure************************
// function that returns function is called closure and uses the variable of parent function/////// when it returns thge function the previous function vanishes

function counter(){
    var a = 12;
    return function    (){
            console.log(a)
        }
    }

    function timer(){
        var a =20;
        return setTimeout(function(){
            console.log(a);
        },2000)
    }
// var ans= timer();

// ***************************** event Delegation************************************* 
// performing  various function with an single event listener..
// Event bubbling means if there is no event listner on the element it wilol look if its parent have it and uses that..

var parent = document.querySelector(".parent")

parent.addEventListener("click", function(Val){
    if(Val.target.id === "play"){
        console.log("play")
    }
    if(Val.target.id === "pause"){
        console.log("pause")
    }
})

// *********************************************Higher ordern function******
// when function accepts the function in the parameter // as well as //returning the function but doesnot have to use the variable from parent where as in closure its compulsary//

var arr =[1,2,3,4,5,6];

arr.forEach(function(){})//// foreach is an higher order function 


// **********************************Error handling try catch**********************
// try{
//     // if(b === 0){ 
// throw Error("error")} run the condition which you think will throw error
// }
// catch(){}
// function divide(a,b)
// {
//     try{
//         if(b === 0){
//             throw Error("Hey thts rude")///string inside the bracket is passed to catch(err)...
//         }console.log(a/b);

//     }
//     catch(err){
//         console.error(err);  // console.error throws the error 
//     }
// }
// divide(5,0);

const evt = new Event ("event");



document.querySelector(".addevent").addEventListener("event", function(){
alert("hey");
})

document.querySelector(".addevent").dispatchEvent(evt);
