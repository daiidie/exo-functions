const isodd = (nb) => {
  if( nb % 2 ===0 ) {
    return true
  }
  else {
    return false
  }
}
const iseven = (nb) => {
 
   return !isodd(nb)
}
 console.log(iseven(1))