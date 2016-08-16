// Конструктор калькулятора
function Calculator(firstNumber){
    this.firstNumber = firstNumber;
}

// Функция сложения
Calculator.prototype.sum = function(){
    let result = this.firstNumber;

    for(let number = 0; number < arguments.length; number++){
        result+=arguments[number];
    }

    return result;
};

// Функция вычитания
Calculator.prototype.dif = function () {
    let result = this.firstNumber;

    for(let number = 0; number < arguments.length; number++){
        result-=arguments[number];
    }

    return result;
};

// Функция деления
Calculator.prototype.div = function () {
    let result = this.firstNumber;

    try {
        for(let number = 0; number < arguments.length; number++){
            if(arguments[number] === 0) {
                throw new Error('Нельзя делить на ноль!')
            }
            else {
                result = result / arguments[number];
            }
        }

        return result;
    }
    catch (e){
        return 'Ни один из аргументентов не должен быть равен 0';
    }
};

// Функция умножения
Calculator.prototype.mul = function () {
    let result = this.firstNumber;

    for(let number = 0; number < arguments.length; number++){
        result = result*arguments[number];
    }

    return result;
};

// Конструктор калькулятора, возводящего в квадрат
function SqlCalc(firstNumber){
    Calculator.call(this, firstNumber);
}

// Наследование прототипа
SqlCalc.prototype = Object.create(Calculator.prototype);

// Расширение функции сложения
SqlCalc.prototype.sum = function(){
    // Вызов метода родителя
    let result = Calculator.prototype.sum.apply(this, arguments);

    // Возведение в квадрат
    return result * result;
};

// Расширение функции вычитания
SqlCalc.prototype.dif = function () {
    // Вызов метода родителя
    let result = Calculator.prototype.dif.apply(this, arguments);

    // Возведение в квадрат
    return result * result;
};

// Расширение функции деления
SqlCalc.prototype.div = function () {
    // Вызов метода родителя
    let result = Calculator.prototype.div.apply(this, arguments);

    // Возведение в квадрат
    return result * result;
};

// Расширение функции умножения
SqlCalc.prototype.mul = function () {
    // Вызов метода родителя
    let result = Calculator.prototype.mul.apply(this, arguments);

    // Возведение в квадрат
    return result * result;
};

let myCalculator = new Calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

let mySqlCalculator = new SqlCalc(100);

console.log(mySqlCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(mySqlCalculator.dif(10, 20)); //вернет 4 900
console.log(mySqlCalculator.div(2, 2)); //вернет 625
console.log(mySqlCalculator.mul(2, 2)); //вернет 160 000