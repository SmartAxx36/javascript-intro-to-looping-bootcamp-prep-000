var array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push("I am ${i} strange loop.")
  } else {
    array.push("I am ${i} strange loops")
  }}
return array
}
function doWhileLoop(array) {
  do array.shift()
  while (array.length > 0)
return array
}