// ****************************
//          ES5
// ****************************
var oldFunction = function(e){
    console.log('Hello', e)
}
// Hello World
oldFunction("World")


// ****************************
//          ES6
// ****************************
const newFunction = () => console.log("= () =>")
//  = () =>
newFunction()

// ****************************
//         ONE PARAMETER
// ****************************
const oneParam = e => console.log('HELLO', e)
// HELLO WORLD
oneParam('WORLD')

// ****************************
//    2 OR MORE PARAMATERS
// ****************************
const moreThanOneParam = (x, y, z) => {
    let result = ""

    result += `(x, y, z)\n`
    result +=  `(${x}, ${y}, ${z})`

    return result;
}
// (x, y, z)
// (You, Are, Awesome)
console.log(moreThanOneParam("You","Are", "Awesome"))


// **********************************
// ES5 WAY IS BETTER FOR CONSTRUCTORS
// **********************************

//----------------------------------
// CASE 1 -> RETURNS VALUE
const obj = {
    name: "Autumn",
    es5Method: function () {
            // This season is: Autumn
        console.log("This season is:", this.name)
    }
};
obj.es5Method(); 


// -------------------------------------------
// the obj context consists of two properties: 
// name and arrowMethod. 
// obj exists at the top level (global scope)
// arrow function uses parent.
// The global scope does not have a name property; 
// therefore, the output is undefined.
// CASE 2 -> RETURNS UNDEFINED
const objArrow = {
    name: "Autumn",
                                // This season is: undefined
    es6Method: () => console.log("This season is:", this.name)
};
objArrow.es6Method(); 


//-------------------------------------
// CASE 3 -> WORKS WITHOUT THIS KEYWORD
const objArrowWorking = {
    name: "Autumn",
                        // Hello Fall!
    es6Method: (x , y) => `${x} ${y}!`
};
console.log( objArrowWorking.es6Method("Hello", "Fall") )