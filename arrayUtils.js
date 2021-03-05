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
