//Factorial

function findFactorialRecursive(number) {
    if (number === 2) return 2;
    return number + findFactorialRecursive(number - 1)
    
}
// time complexity O(n)

function findFactorialIterative(number) {
    let product = 1;
    for(let i = 2; i <= number; i++) {
        product = product * i
    }
    return product;
}
//time complexity O(n)

//Fibonacci // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

function fiboncciaIterative(n) {
    let arr = [0, 1]
    for(let i = 2; i < n; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n];
} // O(n)
fiboncciaIterative(3)

function fibonacciRecursive(n) {
    if(n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n -2)
} // O(2^n)

fibonacciRecursive(3)

