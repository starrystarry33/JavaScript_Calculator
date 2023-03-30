// Get the canvas elements

// Display
// const windows = document.getElementById("windows-button");

// const inputs = document.getElementById("inputs");
// const display = document.getElementById("calc-display-val"); 
const displayInputsElement = document.getElementById("inputs") //inputs
const displayValElement = document.getElementById("calc-display-val");//output

//First Row
const empty1 = document.getElementById("calc-none1");
const empty2 = document.getElementById("calc-none2");
const empty3 = document.getElementById("calc-none3");
const percent = document.getElementById("calc-percent");
const divide = document.getElementById("calc-divide");
//Second Row
const bracketleft = document.getElementById("calc-bracket-left");
const seven = document.getElementById("calc-seven");
const eight = document.getElementById("calc-eight");
const nine = document.getElementById("calc-nine");
const multiply= document.getElementById("calc-multiply");
//Third Row
const bracketright = document.getElementById("calc-bracket-right");
const four = document.getElementById("calc-four");
const five = document.getElementById("calc-five");
const six = document.getElementById("calc-six");
const minus= document.getElementById("calc-minus");
//Fourth Row
const back = document.getElementById("calc-back");
const one = document.getElementById("calc-one");
const two = document.getElementById("calc-two");
const three = document.getElementById("calc-three");
const plus= document.getElementById("calc-plus");
//Fifth Row
const zero = document.getElementById("calc-zero");
const decimal = document.getElementById("calc-decimal");
const equals = document.getElementById("calc-equals");


///////////////////////////////////////////////////////////
// Get the canvas contexts
// const ctxwindows = windows.getContext("2d");
const ctxinputs = displayInputsElement.getContext("2d");
const ctxdisplay = displayValElement.getContext("2d");

const ctxempty1 = empty1.getContext("2d");
const ctxempty2 = empty2.getContext("2d");
const ctxempty3 = empty3.getContext("2d");
const ctxpercent = percent.getContext("2d");
const ctxdivide = divide.getContext("2d");

const ctxbracketleft = bracketleft.getContext("2d");
const ctxseven = seven.getContext("2d");
const ctxeight = eight.getContext("2d");
const ctxnine = nine.getContext("2d");
const ctxmultiply = multiply.getContext("2d");

const ctxbracketright = bracketright.getContext("2d");
const ctxfour = four.getContext("2d");
const ctxfive = five.getContext("2d");
const ctxsix = six.getContext("2d");
const ctxminus = minus.getContext("2d");

const ctxback = back.getContext("2d");
const ctxone = one.getContext("2d");
const ctxtwo = two.getContext("2d");
const ctxthree = three.getContext("2d");
const ctxplus = plus.getContext("2d");

const ctxzero = zero.getContext("2d");
const ctxdecimal = decimal.getContext("2d");
const ctxequals = equals.getContext("2d");


// // Set the canvas sizes
// windows.width = 240;
// windows.height = 80;
displayInputsElement.width = 400;
displayInputsElement.height = 80;
displayValElement.width = 400;
displayValElement.height = 80;

empty1.width = 80;
empty1.height = 80;
empty2.width = 80;
empty2.height = 80;
empty3.width = 80;
empty3.height = 80;
percent.width = 80;
percent.height = 80;
divide.width = 80;
divide.height = 80;

bracketleft.width = 80;
bracketleft.height = 80;
seven.width = 80;
seven.height = 80;
eight.width = 80;
eight.height = 80;
nine.width = 80;
nine.height = 80;
multiply.width = 80;
multiply.height = 80;

bracketright.width = 80;
bracketright.height = 80;
four.width = 80;
four.height = 80;
five.width = 80;
five.height = 80;
six.width = 80;
six.height = 80;
minus.width = 80;
minus.height = 80;

back.width = 80;
back.height = 80;
one.width = 80;
one.height = 80;
two.width = 80;
two.height = 80;
three.width = 80;
three.height = 80;
plus.width = 80;
plus.height = 80;

zero.width = 240;
zero.height = 80;
decimal.width = 80;
decimal.height = 80;
equals.width = 80;
equals.height = 80;

// Draw the buttons

// Define the border radius
// const borderRadius = 10;

// // Set the fill color and draw the rounded rectangle path
// ctxinputs.fillStyle = "#383838";
// ctxinputs.beginPath();
// ctxinputs.moveTo(borderRadius, 0);
// ctxinputs.lineTo(displayInputsElement.width - borderRadius, 0);
// ctxinputs.quadraticCurveTo(displayInputsElement.width, 0, displayInputsElement.width, borderRadius);
// ctxinputs.lineTo(displayInputsElement.width, displayInputsElement.height - borderRadius);
// ctxinputs.quadraticCurveTo(displayInputsElement.width, displayInputsElement.height, displayInputsElement.width - borderRadius, displayInputsElement.height);
// ctxinputs.lineTo(borderRadius, displayInputsElement.height);
// ctxinputs.quadraticCurveTo(0, displayInputsElement.height, 0, displayInputsElement.height - borderRadius);
// ctxinputs.lineTo(0, borderRadius);
// ctxinputs.quadraticCurveTo(0, 0, borderRadius, 0);
// ctxinputs.closePath();

// // Fill the path with the color
// ctxinputs.fill();

ctxinputs.fillStyle = "#383838";
ctxinputs.fillRect(0, 0, 400, 80);

ctxdisplay.fillStyle = "#383838";
ctxdisplay.fillRect(0, 0, 400, 80);


////////////First Row////////////
ctxempty1.fillStyle = "rgb(74,73,73)";
ctxempty1.fillRect(0, 0, 80, 80);
ctxempty1.strokeStyle = "black";
ctxempty1.lineWidth = 0.8;
ctxempty1.strokeRect(0, 0, 80, 80);

ctxempty2.fillStyle = "rgb(74,73,73)";
ctxempty2.fillRect(0, 0, 80, 80);
ctxempty2.strokeStyle = "black";
ctxempty2.lineWidth = 0.8;
ctxempty2.strokeRect(0, 0, 80, 80);

ctxempty3.fillStyle = "rgb(74,73,73)";
ctxempty3.fillRect(0, 0, 80, 80);
ctxempty3.strokeStyle = "black";
ctxempty3.lineWidth = 0.8;
ctxempty3.strokeRect(0, 0, 80, 80);

ctxpercent.fillStyle = "rgb(74,73,73)";
ctxpercent.fillRect(0, 0, 80, 80);
ctxpercent.strokeStyle = "black";
ctxpercent.lineWidth = 0.8;
ctxpercent.strokeRect(0, 0, 80, 80);
ctxpercent.fillStyle = "white";
ctxpercent.font = "36px Arial, Helvetica, sans-serif";
ctxpercent.fillText("%", 25, 50);

ctxdivide.fillStyle = "orange";
ctxdivide.fillRect(0, 0, 80, 80);
ctxdivide.strokeStyle = "black";
ctxdivide.lineWidth = 0.8;
ctxdivide.strokeRect(0, 0, 80, 80);
ctxdivide.fillStyle = "white";
ctxdivide.font = "40px Arial, Helvetica, sans-serif";
ctxdivide.fillText("/", 35, 52);

///////////Second Row///////////

ctxbracketleft.fillStyle = "#808080";
ctxbracketleft.fillRect(0, 0, 80, 80);
ctxbracketleft.strokeStyle = "black";
ctxbracketleft.lineWidth = 0.8;
ctxbracketleft.strokeRect(0, 0, 80, 80);
ctxbracketleft.fillStyle = "white";
ctxbracketleft.font = "36px Arial, Helvetica, sans-serif";
ctxbracketleft.fillText("(", 35, 50);

ctxseven.fillStyle = "#808080";
ctxseven.fillRect(0, 0, 80, 80);
ctxseven.strokeStyle = "black";
ctxseven.lineWidth = 0.8;
ctxseven.strokeRect(0, 0, 80, 80);
ctxseven.fillStyle = "white";
ctxseven.font = "36px Arial, Helvetica, sans-serif";
ctxseven.fillText("7", 30, 52);

ctxeight.fillStyle = "#808080";
ctxeight.fillRect(0, 0, 80, 80);
ctxeight.strokeStyle = "black";
ctxeight.lineWidth = 0.8;
ctxeight.strokeRect(0, 0, 80, 80);
ctxeight.fillStyle = "white";
ctxeight.font = "36px Arial, Helvetica, sans-serif";
ctxeight.fillText("8", 30, 52);

ctxnine.fillStyle = "#808080";
ctxnine.fillRect(0, 0, 80, 80);
ctxnine.strokeStyle = "black";
ctxnine.lineWidth = 0.8;
ctxnine.strokeRect(0, 0, 80, 80);
ctxnine.fillStyle = "white";
ctxnine.font = "36px Arial, Helvetica, sans-serif";
ctxnine.fillText("9", 30, 52);

ctxmultiply.fillStyle = "orange";
ctxmultiply.fillRect(0, 0, 80, 80);
ctxmultiply.strokeStyle = "black";
ctxmultiply.lineWidth = 0.8;
ctxmultiply.strokeRect(0, 0, 80, 80);
ctxmultiply.fillStyle = "white";
ctxmultiply.font = "40px Arial, Helvetica, sans-serif";
ctxmultiply.fillText("x", 30, 50);

//////////Third Row////////////

ctxbracketright.fillStyle = "#808080";
ctxbracketright.fillRect(0, 0, 80, 80);
ctxbracketright.strokeStyle = "black";
ctxbracketright.lineWidth = 0.8;
ctxbracketright.strokeRect(0, 0, 80, 80);
ctxbracketright.fillStyle = "white";
ctxbracketright.font = "36px Arial, Helvetica, sans-serif";
ctxbracketright.fillText(")", 35, 50);

ctxfour.fillStyle = "#808080";
ctxfour.fillRect(0, 0, 80, 80);
ctxfour.strokeStyle = "black";
ctxfour.lineWidth = 0.8;
ctxfour.strokeRect(0, 0, 80, 80);
ctxfour.fillStyle = "white";
ctxfour.font = "36px Arial, Helvetica, sans-serif";
ctxfour.fillText("4", 30, 52);

ctxfive.fillStyle = "#808080";
ctxfive.fillRect(0, 0, 80, 80);
ctxfive.strokeStyle = "black";
ctxfive.lineWidth = 0.8;
ctxfive.strokeRect(0, 0, 80, 80);
ctxfive.fillStyle = "white";
ctxfive.font = "36px Arial, Helvetica, sans-serif";
ctxfive.fillText("5", 30, 52);

ctxsix.fillStyle = "#808080";
ctxsix.fillRect(0, 0, 80, 80);
ctxsix.strokeStyle = "black";
ctxsix.lineWidth = 0.8;
ctxsix.strokeRect(0, 0, 80, 80);
ctxsix.fillStyle = "white";
ctxsix.font = "36px Arial, Helvetica, sans-serif";
ctxsix.fillText("6", 30, 52);

ctxminus.fillStyle = "orange";
ctxminus.fillRect(0, 0, 80, 80);
ctxminus.strokeStyle = "black";
ctxminus.lineWidth = 0.8;
ctxminus.strokeRect(0, 0, 80, 80);
ctxminus.fillStyle = "white";
ctxminus.font = "40px Arial, Helvetica, sans-serif";
ctxminus.fillText("-", 32, 52);

//////////Fourth Row////////////

ctxback.fillStyle = "#808080";
ctxback.fillRect(0, 0, 80, 80);
ctxback.strokeStyle = "black";
ctxback.lineWidth = 0.8;
ctxback.strokeRect(0, 0, 80, 80);
ctxback.fillStyle = "white";
ctxback.font = "28px Arial, Helvetica, sans-serif";
ctxback.fillText("Back", 10, 50);

ctxone.fillStyle = "#808080";
ctxone.fillRect(0, 0, 80, 80);
ctxone.strokeStyle = "black";
ctxone.lineWidth = 0.8;
ctxone.strokeRect(0, 0, 80, 80);
ctxone.fillStyle = "white";
ctxone.font = "36px Arial, Helvetica, sans-serif";
ctxone.fillText("1", 30, 52);

ctxtwo.fillStyle = "#808080";
ctxtwo.fillRect(0, 0, 80, 80);
ctxtwo.strokeStyle = "black";
ctxtwo.lineWidth = 0.8;
ctxtwo.strokeRect(0, 0, 80, 80);
ctxtwo.fillStyle = "white";
ctxtwo.font = "36px Arial, Helvetica, sans-serif";
ctxtwo.fillText("2", 30, 52);

ctxthree.fillStyle = "#808080";
ctxthree.fillRect(0, 0, 80, 80);
ctxthree.strokeStyle = "black";
ctxthree.lineWidth = 0.8;
ctxthree.strokeRect(0, 0, 80, 80);
ctxthree.fillStyle = "white";
ctxthree.font = "36px Arial, Helvetica, sans-serif";
ctxthree.fillText("3", 30, 52);

ctxplus.fillStyle = "orange";
ctxplus.fillRect(0, 0, 80, 80);
ctxplus.strokeStyle = "black";
ctxplus.lineWidth = 0.8;
ctxplus.strokeRect(0, 0, 80, 80);
ctxplus.fillStyle = "white";
ctxplus.font = "40px Arial, Helvetica, sans-serif";
ctxplus.fillText("+", 28, 55);

//////////Fifth Row////////////

ctxzero.fillStyle = "#808080";
ctxzero.fillRect(0, 0, 250, 80);
ctxzero.strokeStyle = "black";
ctxzero.lineWidth = 0.8;
ctxzero.strokeRect(0, 0, 250, 80);
ctxzero.fillStyle = "white";
ctxzero.font = "36px Arial, Helvetica, sans-serif";
ctxzero.fillText("0", 125, 50);

ctxdecimal.fillStyle = "#808080";
ctxdecimal.fillRect(0, 0, 80, 80);
ctxdecimal.strokeStyle = "black";
ctxdecimal.lineWidth = 0.8;
ctxdecimal.strokeRect(0, 0, 80, 80);
ctxdecimal.fillStyle = "white";
ctxdecimal.font = "48px Arial, Helvetica, sans-serif";
ctxdecimal.fillText(".", 32, 45);

ctxequals.fillStyle = "orange";
ctxequals.fillRect(0, 0, 80, 80);
ctxequals.strokeStyle = "black";
ctxequals.lineWidth = 0.8;
ctxequals.strokeRect(0, 0, 80, 80);
ctxequals.fillStyle = "white";
ctxequals.font = "36px Arial, Helvetica, sans-serif";
ctxequals.fillText("=", 30, 52);
//////////////////////////////////////

bracketleft.style.position = "relative";
bracketleft.style.left = 10;
bracketleft.style.top = 85;
seven.style.position="relative";
seven.style.left=85;
seven.style.top=85;


//////////////////Add Event Listeners to the buttons////////////////////
////////// Row1 /////////
document.getElementById("calc-none1").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e); // Call the updateDisplayInputs function and pass in the event object
  });

document.getElementById("calc-none2").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});

document.getElementById("calc-none3").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});

document.getElementById("calc-percent").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-divide").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
// ////////// Row2 /////////
document.getElementById("calc-bracket-left").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-seven").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-eight").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-nine").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-multiply").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
// ////////// Row3 /////////
document.getElementById("calc-bracket-right").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-four").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-five").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-six").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-minus").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
// //////////Row4////////////
document.getElementById("calc-back").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-one").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-two").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-three").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-plus").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
// //////////Row5/////////////
document.getElementById("calc-zero").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-decimal").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});
document.getElementById("calc-equals").addEventListener("click", function(e) {
    // console.log("123");
    updateDisplayInputs(e);
});



/////////////////////////////////////////
// var displayInputsElement = document.getElementById("inputs") //inputs
// var displayValElement = document.getElementById("calc-display-val");//output
var calNumBtns = document.getElementsByClassName("cal-btn-num");  //keys
var operatorBtns = document.getElementsByClassName("calc-btn-operator");

// var displayVal = "0";
let input = '' // var evalStringArray = []
var result = '';

const updateDisplayInputs= (e) => {
    var btnText = e.target.innerHTML;
    // console.log("Button clicked");
    
    if(btnText === "x"){
        // console.log("x");
        btnText = "*";
        if(validateInput(btnText)){
            input+= btnText;
            // displayInputsElement.innerHTML = input;
            ctxinputs.clearRect(0, 0, 400, 80);
            ctxinputs.fillStyle ="#383838" ;
            ctxinputs.fillRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText(input, 240, 45); 
        }
    }

    //caculate result
    else if(btnText === "="){
        // console.log("="); 
        try {
            var result = eval(perpareInput(input));
            // displayValElement.innerText = result;
            ctxdisplay.fillStyle = "white";
            ctxdisplay.font = "20px Arial, Helvetica, sans-serif";
            ctxdisplay.fillText(result, 240, 45); 
        } catch(error) {
        // alert("An error has occurred: " + error.message);
        // console.error(error);
        // displayInputsElement.innerHTML = "Invaild Inputs";
            ctxinputs.clearRect(0, 0, 400, 80);
            ctxinputs.fillStyle ="#383838" ;
            ctxinputs.fillRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText("Invalid Inputs", 280, 45);
        }
    }

    else if(btnText === "Back"){
        // let lengthOfDisplayinputs = input.length;
        // input = input.slice(0, lengthOfDisplayinputs-1);
        
        input = input.slice(0,-1);
        // displayInputsElement.innerHTML = input;
        // ctxinputs.fillStyle = "white";
        // ctxinputs.font = "20px Arial, Helvetica, sans-serif";
        // ctxinputs.fillText(input, 200, 40);
        ctxinputs.clearRect(0, 0, 400, 80);
        ctxinputs.fillStyle = "#383838";
        ctxinputs.fillRect(0, 0, 400, 80);
        ctxinputs.fillStyle = "white";
        ctxinputs.font = "20px Arial, Helvetica, sans-serif";
        ctxinputs.fillText(input, 240, 45);


        if(input.length === 0){
            result = ""
            // displayValElement.innerHTML = "";
            // ctxdisplay.fillStyle = "white";
            // ctxdisplay.font = "20px Arial, Helvetica, sans-serif";
            // ctxdisplay.fillText("", 200, 40);
            ctxdisplay.clearRect(0, 0, 400, 80);
            ctxdisplay.fillStyle = "#383838";
            ctxdisplay.fillRect(0, 0, 400, 80);
        }
    }

    else if(btnText === "("){
        
        if(input.indexOf("(") == -1 || //  no ( exists
        input.indexOf("(") != -1 && input.indexOf(")") != -1  && input.lastIndexOf("(") < input.lastIndexOf(")")){
            input += "("
            // displayInputsElement.innerHTML = input;
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText(input, 240, 45);
        }else{
            // displayInputsElement.innerHTML = "Invalid Inputs";
            ctxinputs.clearRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "#383838";
            ctxinputs.fillRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText("Invalid Inputs", 280, 45);
        }
    }

    else if(btnText === ")"){
        
        if(input.indexOf("(") != -1  && input.indexOf(")") == -1  || //   exists one ( 
        input.indexOf(")") != -1  && input.indexOf("(") != -1 
        && input.lastIndexOf("(") > input.lastIndexOf(")")){ // exists () closing brackets and one (
            input += ")"
            // displayInputsElement.innerHTML = input;
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText(input, 240, 45);
        }else{
            // displayInputsElement.innerHTML = "Invalid Inputs";
            ctxinputs.clearRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "#383838";
            ctxinputs.fillRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText("Invalid Inputs", 280, 45);
        }
    }



    else if(btnText === "("){
        
        if(input.indexOf("(") == -1 || //  no ( exists
        input.indexOf("(") != -1 && input.indexOf(")") != -1  && input.lastIndexOf("(")<lastIndexOf(")")){
            input += "("
            // displayInputsElement.innerHTMl = input;
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText(input, 240, 45);
        }else{
            // displayInputsElement.innerHTML = "Invalid Inputs";
            ctxinputs.clearRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "#383838";
            ctxinputs.fillRect(0, 0, 400, 80);
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText("Invalid Inputs", 280, 45);
        }
    }


    else{
        if(validateInput(btnText)){
            input+= btnText;
            // displayInputsElement.innerHTML = input;
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText(input, 240, 45);
        }
    }
}


// //add event listern for every num button
// for(let i = 0; i< calNumBtns.length; i++){
//     calNumBtns[i].addEventListener('click', updateDisplayInputs,false);

// }

// //add evebt listner for every operator
// for(let i = 0; i< operatorBtns.length; i++){
//     operatorBtns[i].addEventListener('click', updateDisplayInputs,false);
// }

/* ---------------------       back function       ------------*/
// var backBtn = document.getElementById("calc-back");

// var displayinputs = "0";

/*---------------decimal, only allowed addd one . -------------- */
// const decimalBtn = document.getElementById("calc-decimal");
decimal.onclick = () =>{
    if(!input.includes('.'))
        input += '.'
    // displayInputsElement.innerText = input;
    ctxinputs.fillStyle = "white";
    ctxinputs.font = "20px Arial, Helvetica, sans-serif";
    ctxinputs.fillText(input, 200, 45);
}
/* -------------------------   input validate  return True or False  ----------------------------- */
function validateInput(btnText){
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"]
    //if there is an operator at the last, you are not allowed to add and click any operator
    if (operators.includes(btnText)){
        if(operators.includes(last_input)){
            // displayInputsElement.innerText = "Invalid Expression";
            ctxinputs.fillStyle = "white";
            ctxinputs.font = "20px Arial, Helvetica, sans-serif";
            ctxinputs.fillText("Invalid Expression", 280, 45);
            return false;
            
        }else{
            return true;
        }
    }
    return true;
}


function perpareInput(input){
    let input_array = input.split("");
    
    for(let i=0; i<input_array.length; i++){
        if(input_array[i] == "%"){
            input_array[i] = "/100";
        }
        
    }
    return input_array.join("");
}

const canvases = document.querySelectorAll('.calc-btn');
canvases.forEach(canvas => {
//   canvas.style.border = '1px solid black';
});

const display1 = document.querySelector('.display1');
display1.style.display = 'flex';

const display2 = document.querySelector('.display2');
display2.style.display = 'flex';

const row1 = document.querySelector('.row1');
row1.style.display = 'flex';

const row2 = document.querySelector('.row2');
row2.style.display = 'flex';

const row3 = document.querySelector('.row3');
row3.style.display = 'flex';

const row4 = document.querySelector('.row4');
row4.style.display = 'flex';

const row5 = document.querySelector('.row5');
row5.style.display = 'flex';

const calculate1 = document.querySelector('.calculate');
calculate1.style.paddingLeft = '300px';
calculate1.style.paddingTop = '100px';
calculate1.style.borderRadius = '10px';

