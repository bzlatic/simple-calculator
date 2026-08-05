let divisionPressed = 0;
let multiplicationPressed = 0;
let additionPressed = 0;
let subtractionPressed = 0;

let interface = document.querySelector("#result");
let result
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ")", "("]
let interfaceContent = interface.textContent;

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    interface.textContent = "";
    interfaceContent = interface.textContent;

});

const percBtn = document.querySelector("#perc");

const multiplicationBtn = document.querySelector("#multiplication");
multiplicationBtn.addEventListener("click", () =>{
    if(interfaceContent == "" || !(numbers.includes(interfaceContent[interfaceContent.length - 1]))){
    } else {
        multiplicationPressed = 1;
        interface.textContent += "*";
        interfaceContent = interface.textContent;
    };
});

const divisionBtn = document.querySelector("#division");
divisionBtn.addEventListener("click", () =>{
    if(interfaceContent == "" || !(numbers.includes(interfaceContent[interfaceContent.length - 1]))){
    } else {
        divisionPressed = 1;
        interface.textContent += "/";
        interfaceContent = interface.textContent;
    };
});

const additionBtn = document.querySelector("#addition");
additionBtn.addEventListener("click", () =>{
    if(interfaceContent == "" || !(numbers.includes(interfaceContent[interfaceContent.length - 1]))){
    } else {
        additionPressed = 1;
        interface.textContent += "+";
        interfaceContent = interface.textContent;;
    };
});

const subtractionBtn = document.querySelector("#subtraction");
subtractionBtn.addEventListener("click", () =>{
    if(interfaceContent == "" || !(numbers.includes(interfaceContent[interfaceContent.length - 1]))){
    } else {
        subtractionPressed = 1;
        interface.textContent += "-";
        interfaceContent = interface.textContent;
    };
});

const equalsBtn = document.querySelector("#evaluate");
equalsBtn.addEventListener("click", () => {
    result = String(Function(`return ${interfaceContent}`)());
    interface.textContent = result;
    interfaceContent = interface.textContent;
});

const delBtn = document.querySelector("#backspace");
delBtn.addEventListener("click", () => {
    interfaceContent = interfaceContent.slice(0, -1);
    interface.textContent = interfaceContent;
});

const decimalBtn = document.querySelector("#decimal-point");

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "1";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "1"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "1"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "1"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "1"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "2";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "2"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "2"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "2"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "2"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "3";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "3"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "3"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "3"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "3"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "4";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "4"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "4"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "4"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "4"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "5";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "5"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "5"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "5"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "5"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "6";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "6"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "6"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "6"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "6"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "7";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "7"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "7"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "7"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "7"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "8";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "8"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "8"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "8"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "8"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    } 
})

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click", () => {
    if(interfaceContent == "" || numbers.includes(interfaceContent[interfaceContent.length - 1])){
        interface.textContent += "9";
        interfaceContent = interface.textContent;
    } else if(additionPressed == 1){
        interface.textContent += "9"
        interfaceContent = interface.textContent;
        additionPressed = 0;
    } else if(subtractionPressed == 1){
        interface.textContent += "9"
        interfaceContent = interface.textContent;
        subtractionPressed = 0;
    } else if(multiplicationPressed == 1){
        interface.textContent += "9"
        interfaceContent = interface.textContent;
        multiplicationPressed = 0;
    } else if(divisionPressed == 1){
        interface.textContent += "9"
        interfaceContent = interface.textContent;
        divisionPressed = 0;
    }
})