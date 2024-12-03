function sumMix(x) {

  // let allNums = x.map( e => +e )

  // // console.log(allNums)

  // // (accumulator, current value) => accumulator + current value, initial value
  // return allNums.reduce( (a, c) => a + c, 0)

  // return x.reduce( (a, c) => a + +c, 0)

  let sum = 0
      
  for (let i = 0; i < x.length; i++) {
    sum+= +x[i]
  }
  
  return sum
}

console.log(sumMix( [1, 2, '3', '04', 5] ))
console.log(sumMix( [2, '2', '2', 2] ))
console.log(sumMix( ['10', '11', '12'] ))

// take in an array
  // can contain strings and numbers
// return the sum of the array, after all elements have been converted to strings
  // the final return value should be a number

// sumMix( [1, 2, '3', '04', 5] )
// sumMix( [2, '2', '2', 2] )
// sumMix( ['10', '11', '12'])

// map over the array, converting each element to a number if its not already
// use the reduce method to find the sum of the array of numbers
// return the sum

