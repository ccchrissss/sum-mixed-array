function sumMix(x){

  // map over the array
    // turn each element into a number
  // assign this new array to a variable called allNumsArr

  let allNumsArr = x.map( e => Number(e) )

  // console.log(allNumsArr)
  
  // reduce method to sum the array
  // return this value

  let sum = allNumsArr.reduce( (a, c) =>  a + c, 0 )

  // console.log(sum)

  return sum
}

sumMix(['1', 2, 3, 4, '5'])

// takes in an array of strings and numbers
// should return a number
// e.g. sumMix ( ['1', 2, 3, 4, '5'] )
// results in 15

