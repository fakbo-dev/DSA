function sum(n)
{
    if (n === 1) return 1;

    return n + sum(n - 1);
}
// the factorial of a number is the multiply of n between 1 and n
function fact(n)
{
    if (n === 0) return 1;

    return n * fact(n - 1);
}
console.log('the sum of n number between 5 and 0 is',sum(5));
console.log('the factorial of the number 5 is',fact(5));

