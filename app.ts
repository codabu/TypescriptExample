class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toLocaleTimeString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toLocaleTimeString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

let principal : number = 0;
let interestRate : number = 0;
let  timesCompounded : number  = 0;
let termOfLoan : number = 0;
let amount : number = 0;

/*function simpleInterest() {
    event.preventDefault();
    var principal = parseFloat(document.getElementById("principalSimple").value);
    var interestRate = parseFloat(document.getElementById("interestSimple").value);
    interestRate = interestRate / 100;
    var termOfLoan = parseFloat(document.getElementById("termSimple").value);
    var simpleInt = principal * interestRate * termOfLoan;
    var amount = (principal + simpleInt).toFixed(2);
    document.getElementById("siOutput-01").innerHTML = "Interest: $" + simpleInt.toFixed(2);
    document.getElementById("siOutput-02").innerHTML = "Total plus interest: $" + amount;
}
*/

function simpleInterest() {
    event.preventDefault();
    principal = parseFloat((<HTMLInputElement>document.getElementById("principalSimple")).value);
    interestRate = parseFloat((<HTMLInputElement>document.getElementById("interestSimple")).value);
    interestRate = interestRate / 100;
    termOfLoan = parseFloat((<HTMLInputElement>document.getElementById("termSimple")).value);
    let simpleInt: number = principal * interestRate * termOfLoan;
    let amount: number = (principal + simpleInt);
    document.getElementById("siOutput-01").innerHTML = "Interest: $" + simpleInt.toFixed(2);
    document.getElementById("siOutput-02").innerHTML = "Total plus interest: $" + amount.toFixed(2);
}





/*function compoundInterest() {
    event.preventDefault();
    var principal = parseFloat(document.getElementById("principalCompound").value);
    var interestRate = parseFloat(document.getElementById("interestCompound").value);
    interestRate = interestRate / 100;
    var timesCompounded = parseFloat(document.getElementById("timesCompounded").value);
    var termOfLoan = parseFloat(document.getElementById("termCompound").value);
    var a = interestRate / timesCompounded;
    var b = 1 + a;
    var c = timesCompounded * termOfLoan;
    var d = Math.pow(b, c);
    var amount = (principal * d).toFixed(2);
    document.getElementById("ciOutput-01").innerHTML = "Interest: $" + (amount - principal).toFixed(2);
    document.getElementById("ciOutput-02").innerHTML = "Total plus interest: $" + amount;
}
*/

function compoundInterest() {
    event.preventDefault();
    principal = parseFloat((<HTMLInputElement>document.getElementById("principalCompound")).value);
    interestRate = parseFloat((<HTMLInputElement>document.getElementById("interestCompound")).value);
    interestRate = interestRate / 100;
    timesCompounded = parseFloat((<HTMLInputElement>document.getElementById("timesCompounded")).value);
    termOfLoan = parseFloat((<HTMLInputElement>document.getElementById("termCompound")).value);
    let a: number = interestRate / timesCompounded;
    let b: number = 1 + a;
    let c: number = timesCompounded * termOfLoan;
    let d: number = Math.pow(b, c);
    let amount: number = (principal * d);
    document.getElementById("ciOutput-01").innerHTML = "Interest: $" + (amount - principal).toFixed(2);
    document.getElementById("ciOutput-02").innerHTML = "Total plus interest: $" + amount.toFixed(2);
}