import { stdout, stdin } from "process"

const mainArgv = process.argv.slice(2);

const counting = (sign) => {
    stdin.on("data", (data) => {
        const numArgvToString = data.toString();
        const numArgv = numArgvToString.slice(0, numArgvToString.length - 2)
        const numToArr = numArgv.split(" ");

        const firstNum = numToArr[0]
        const secondNum = numToArr[1]

        const result = numToArr.reduce((sum, current) => {
            if (sign === "+") {
                return +sum + +current
            }
            if (sign === "*") {
                return +sum * +current
            }
            
        });

        stdout.write(`${firstNum} ${sign} ${secondNum} = ${result}`)
        process.exit()
    })
}

const sum = () => {
    stdout.write("Введите 2 числа:\n")
    counting("+")
}

const multiplication = () => {
    stdout.write("Введите 2 числа:\n")
    counting("*")
}

if (mainArgv.join("") === "-s") {
    sum();
}

if (mainArgv.join("") === "-m") {
    multiplication()
}


// > node argv.js -m
// Введите 2 числа
// > 2 7
// 2 * 7 = 14


// > node argv.js -s
// Введите 2 числа
// > 2 7
// 2 + 7 = 9