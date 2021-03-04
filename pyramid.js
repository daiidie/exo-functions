const showStars = (nbBase, reverse, char) => {
  if (reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(char.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(char.repeat(i))
    }
  }
}

showStars(15, true, "boum")