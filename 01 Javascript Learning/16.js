// and  or operator 

let firstName = "nadeem";
let age = 17;

// if(firstName[0] === "N" ){
//     console.log("your name stars with N")
// }

// if(age > 18){
//     console.log("You are above 18")
// }

// if(firstName[0] === "N" && age>18){
// console.log("Name startes with N and above 18")
// }else{
//     console.log("Something else")
// }
if (firstName[0] === 'N' || age > 18) {
  console.log('inside if');
} else {
  console.log('Inside else');
}