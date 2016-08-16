class Calculator{
    // Конструктор калькулятора
    constructor(firstNumber){
        this.firstNumber = firstNumber;
    }

    // Функция сложения
    sum() {
        let result = this.firstNumber;

        for(let number = 0; number < arguments.length; number++){
            result+=arguments[number];
        }

        return result;
    }
    // Функция вычитания
    dif() {
        let result = this.firstNumber;

        for(let number = 0; number < arguments.length; number++){
            result-=arguments[number];
        }

        return result;
    }
    // Функция деления
    div() {
        let result = this.firstNumber;

        try {
            for(let number = 0; number < arguments.length; number++){
                if(arguments[number] === 0) {
                    throw new Error('Нельзя делить на ноль!')
                }
                else {
                    result = result/arguments[number];
                }
            }

            return result;
        }
        catch (e){
            return 'Ни один из аргументентов не должен быть равен 0';
        }
    }
    // Функция умножения
    mul() {
        let result = this.firstNumber;

        for(let number = 0; number < arguments.length; number++){
            result = result*arguments[number];
        }

        return result;
    }
}

class SqlCalc extends Calculator{
    // Конструктор калькулятора, возводящего в квадрат
    constructor(firstNumber){
        super(firstNumber);
    }

    // Расширение функции сложения
    sum() {
        // Вызов метода родителя
        let result = super.sum(...arguments);

        // Возведение в квадрат
        return result * result;
    }
    // Расширение функции вычитания
    dif() {
        // Вызов метода родителя
        let result = super.dif(...arguments);

        // Возведение в квадрат
        return result * result;
    }
    // Расширение функции деления
    div() {
        // Вызов метода родителя
        let result = super.div(...arguments);

        // Возведение в квадрат
        return result * result;
    }
    // Расширение функции умножения
    mul() {
        // Вызов метода родителя
        let result = super.mul(...arguments);

        // Возведение в квадрат
        return result * result;
    }
}

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