let divisionPressed = 0;
let multiplicationPressed = 0;
let additionPressed = 0;
let subtractionPressed = 0;

let bracketLeft = 0;
let bracketRight = 0;

let interface = document.querySelector("#result");
let result
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ")", "("]
let interfaceContent = interface.textContent;

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    interface.textContent = "";
    interfaceContent = interface.textContent;

});

function round(num, decimalPoints){
    return Math.floor(num * 10**decimalPoints) / 10**decimalPoints;
}

function addNumber(number) {
    if (
        interfaceContent === "" ||
        numbers.includes(interfaceContent[interfaceContent.length - 1]) ||
        additionPressed ||
        subtractionPressed ||
        multiplicationPressed ||
        divisionPressed
    ) {
        interface.textContent += number;
        interfaceContent = interface.textContent;

        additionPressed = 0;
        subtractionPressed = 0;
        multiplicationPressed = 0;
        divisionPressed = 0;
    }
}

function addOperator(operator) {
    if (
        interfaceContent !== "" &&
        numbers.includes(interfaceContent[interfaceContent.length - 1])
    ) {
        interface.textContent += operator;
        interfaceContent = interface.textContent;
    }
}

const percBtn = document.querySelector("#perc");

const multiplicationBtn = document.querySelector("#multiplication");
multiplicationBtn.addEventListener("click", () =>{
    addOperator("*");
    multiplicationPressed = 1;
});

const divisionBtn = document.querySelector("#division");
divisionBtn.addEventListener("click", () =>{
    addOperator("/");
    divisionPressed = 1;
});

const additionBtn = document.querySelector("#addition");
additionBtn.addEventListener("click", () =>{
    addOperator("+");
    additionPressed = 1;
});

const subtractionBtn = document.querySelector("#subtraction");
subtractionBtn.addEventListener("click", () =>{
    addOperator("-");
    subtractionPressed = 1;
});

const equalsBtn = document.querySelector("#evaluate");
equalsBtn.addEventListener("click", () => {
    interfaceContent = interfaceContent
    .replace(/(\d)\(/g, "$1*(")
    .replace(/\)(\d)/g, ")*$1")
    .replace(/\)\(/g, ")*(");
    result = String(round(Function(`return ${interfaceContent}`)(), 2));
    interface.textContent = result;
    interfaceContent = interface.textContent;
});

const delBtn = document.querySelector("#backspace");
delBtn.addEventListener("click", () => {
    interfaceContent = interfaceContent.slice(0, -1);
    interface.textContent = interfaceContent;
});

const decimalBtn = document.querySelector("#decimal-point");
decimalBtn.addEventListener("click", () => {
    const currentNumber = interfaceContent.split(/[+\-*/()]/).pop();

    if (currentNumber === "") {
        interface.textContent += "0.";
    } else if (!currentNumber.includes(".")) {
        interface.textContent += ".";
    }

    interfaceContent = interface.textContent;
});

const oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click", () => {
    addNumber("1")
})

const twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click", () => {
    addNumber("2")
})

const threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click", () => {
    addNumber("3")
})

const fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click", () => {
    addNumber("4")
})

const fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click", () => {
    addNumber("5")
})

const sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click", () => {
    addNumber("6")
})

const sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click", () => {
    addNumber("7")
})

const eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click", () => {
    addNumber("8")
})

const nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click", () => {
    addNumber("9")
});

const bracketsBtn = document.querySelector("#brackets");
bracketsBtn.addEventListener("click", () => {
    const open = (interfaceContent.match(/\(/g) || []).length;
    const close = (interfaceContent.match(/\)/g) || []).length;
    const last = interfaceContent[interfaceContent.length - 1];

    if (
        interfaceContent === "" ||
        "+-*/(".includes(last)
    ) {
        interface.textContent += "(";
    } else if (open > close) {
        interface.textContent += ")";
    } else {
        interface.textContent += "(";
    }

    interfaceContent = interface.textContent;
});

const odinBtn = document.querySelector("#odin");
odinBtn.addEventListener("click", () => {
    window.open("https://www.theodinproject.com");
});