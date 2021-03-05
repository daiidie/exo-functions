const add = (nb1, nb2) => {
return nb1 + nb2 
}
console.log(add(5,6))

const sub = (nb1, nb2) => {
  return nb1 - nb2
}
console.log(sub(10,3))

const mul = (nb1, nb2) => {
  return nb1 * nb2
}
console.log(mul(25,4))  

const div = (nb1, nb2) => {
  return nb1 / nb2
}
console.log(div(150,5))  

const calc = (operator,nb1, nb2) => {
   switch(operator) {
     case "+":
     return nb1 + nb2 
     break;
     case "-":
     return nb1 - nb2 
     break;
     case "*":
     return nb1 * nb2 
     break;
     case "/":
     return nb1 / nb2 
     break;
     default: 
     console.log("valeur non connue")
     
    } 



}
console.log(calc("+", 10, 5 ))