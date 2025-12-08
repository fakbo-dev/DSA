function isPalindrome(x: number): boolean
{

  let result = '';

  for (let i = x.toString().length - 1; i >= 0; i--)
  {
    result += x.toString()[i];
  }

  console.log(result);

  return result === x.toString();
}
console.log(isPalindrome(1000021));
