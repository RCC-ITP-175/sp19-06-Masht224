console.log("exercise2.js start");
// INSTRUCTIONS
// Write a function named isProg that accepts one argument
// and returns true if that argument is a string that 
// starts with the letters "prog" and false otherwise. 


function isProg(Prog) {
  if (prog) {
    return "True";
  }
  return "False";
}
///////////////////////
// INSTRUCTOR FEEDBACK
///////////////////////
// On line 9 if (prog) is only checking if a variable named
// prog exists, it isn't checking to see if it is a string
// that starts with the letters "prog"

console.log(IsProg('prgrmmng'));
























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(isProg('prgrmmng')); //should return false
console.log(isProg('pr0gressive')); //should return false
console.log(isProg('program')); //should return true
console.log(isProg('progressive')); //should return true
