const count = (min, max, step) => {   
  for (min; min < max; min += step) {
    console.log(min)
  }
  return(min)
}
 console.log(count(10,100,5))