var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}























/* var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift()
 return array
}

function removeElementFromBeginningOfArray(array) {
  var x = array.slice(1)
  return x
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array) {
  var x = array.slice(0, array.length - 1)
  return x
}
*/

/*var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
//creates an array with 4 types of candy bars.  (Did not pass test when I used CONST instead of VAR?)

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
//adds an element to the beginning of array without changing the array. 

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
//adds element to the beginning of the array while changing the size of the array. 

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
//adds an element to the end of the array without changing the array.

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
//adds element to the end of array while changing the size of the array.

function accessElementInArray(array, index) {
  return array[index]
}
//access an element in the array at a certain index and returns it.

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() 
  return array 
}
//removes the first element of the array and returns the new array. 

function removeElementFromBeginningOfArray(array) {
  var m = array.slice(1)
  return m 
}
//removes the first element from the array and returns the first element without altering the original array.

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop() 
  return array 
}
//removes the last element of the array and returns the new array.

function removeElementFromEndOfArray(array) {
  var m = array.slice(0, array.length - 1)
  return m
}
//removes the last element from the array without altering the array and returns the last element. (Look more into this)
*/