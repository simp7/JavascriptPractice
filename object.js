let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let person in salaries) {
    sum += salaries[person]
}

console.log(sum);

function multiplyNumeric(obj) {
    for (let property in obj) {
        if (typeof(obj[property]) == "number") {
            obj[property] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);

let calculator = {
    read(n1, n2) {
        this.a = n1;
        this.b = n2;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};


calculator.read(7, 6);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().up().showStep();

let obj = {};
function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;
console.log(a == b);

function Calculator() {
    this.read = function(a, b) {
        this.n1 = a;
        this.n2 = b;
    }
    this.sum = function() {
        return this.n1 + this.n2;
    }
    this.mul = function() {
        return this.n1 * this.n2;
    }
}

let anotherCalculator = new Calculator();
anotherCalculator.read(7, 3);

console.log("Sum=" + anotherCalculator.sum());
console.log("Mul=" + anotherCalculator.mul());

function Accumulator(initialValue) {
    this.value = initialValue
    this.read = function(inserted) {
        this.value += inserted;
    }
}

let accumulator = new Accumulator(1);
accumulator.read(3);
accumulator.read(10);
console.log(accumulator.value)
