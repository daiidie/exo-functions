
const reverseStr = (str) => {
  return  str.split('').reverse().join('')
}

const isPalindrome = (str) => {
  return ( reverseStr(str) === str ? true : false) 
}
console.log(reverseStr("brulant"))
console.log(isPalindrome("ete"))