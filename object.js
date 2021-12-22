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