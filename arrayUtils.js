const biggest = (tab) =>{
  let MAX = tab[0]
  for(const elem of tab) {
    if (MAX < elem) {
      MAX = elem
    }
  }
  return MAX
}
  console.log(biggest([100,1,200,52,63,87,99]))

  // autre méthode
/*
const biggest = (tabNb) => {
  return Math.max(...tabNb)}
*/
 
const sortAscend = (tab) => {
  return tab.sort((a, b) => a - b)

}
console.log(sortAscend([100,1,200,52,63,87,99]))
 

const makeUnique = (tab) => {
  return sortAscend(Array.from(new Set(tab)))
}
console.log(makeUnique([1, 2, 1, 7, 3, 2, 4, 5, 7, 5, 1]))