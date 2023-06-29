var sum = 0

for (var t = 0; t <= 999; t++) {
  if (t % 3 === 0) {
    sum += t
  } else if (t % 5 === 0) {
    sum += t
  }
}
console.log("sum is:", sum)
