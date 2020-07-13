function factorialRecursive(number) {
    let factNum = 1;
    factNum = factNum * number
    if(number === 2) {
        return factNum
    }
    return factNum * factorialRecursive(number - 1)
}

// console.log(factorialRecursive(3))


function fibonacciRecursive(n) {
    if(n < 2){
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(4))