// In-built functions || predefined functions
// alert('hello world')
// prompt("what is your name")
// confirm('Are you sure you want to make this transaction')
// console.log(10*5)


// variables
// var
//let age =// 30
// age = 25//
// console.log(age);

//
// console.log(colours,pop()) co//nst  age = 30
//con//sole.log(age);

//
// console.log(colours,pop()) //Data types
// //primitive
// String

// console.log(colours,pop())/let name = 'John Doe'
//console.log(name)

// boolean
//let isMarried = true
//console.log(isMarried)

// Null
//let userinfo = null
//console.log(userinfo)

// Undefined
//let date;
//console.log(date)

// Non-primitive Data types
// Data data type
//let timeDate = new Date()
//let hour = new Date().getMonth() + 1
//console.log(timeDate);
//console.log(hour);


// function data types
//function login(email, password){
    //console.log('Your email(' + email +')' + ' and password(' + password + ') are correct')
//}
//login('ferunmiajayi@gmail.com', 12345)

//function addNum(a, b){
   // console.log(a, b);
//}
//addNum(15, 10)

// function expression
//const addNum = function(a, b){
//    console.log(a + b);
//}
//addNum(9, 7)

// Array data type
// length     1     2      3     4
// let colours = ['white', 'blue', 'red', 'orange']
// index      0,    1,     2,    3
//console.log(array1.length)
//console.log(array1[2])
// colours.pop()
// console.log(colours)
// colours.push('grey')
// console.log(colours)
// colours.shift()
// console.log(colours)
// colours.unshift('violet')
// console.log(colours)

// object Data type
//const person = {
 //   name: 'jenny',
   // age: 25,
    //isStudent: true,
    //certificate: null
//}
//console.log(person['isStudent'], person)


//const properties = [
//    'shoes',
//    cars=['lamborghini', 'porshe', benz=['AMG', 'GLE', 'GLK'], 'Toyota'],
//    companies=['TechHub', 'School', 'Saloon', factories=['Salt', 'cement', 'flour','sugar'], 'restantant'],
//    house=['penthouse', 'bungalow', 'duplex', multiStorey=['4', '3', '5']]
//]
//console.log(properties[1][2][2], properties[2][3][3], properties[2][4], properties[3][3][1])

// Nested objects
// const person = {
   // name: 'jane',
   // age: 25,
   // isStudent: true,
   // religion: 'Christian',
   // country: 'Armenia',
   // profession: {
   //     title: 'SE',
   //     company: 'Google',
   //     mode: 'remote',
   //     level: 'Tier 1',
   //     jobDesc: {
   //         started: '2023/07/12',
     //       endDate: 'currently works here',
     //       qualification:'ISQBT'
       // }
    //}
//}
// console.log(person.country, person.profession.company, person.profession.jobDesc.qualification)

// const players = [
//     {
//         id: 1,
//         name: 'Lionel messi',
//         country: 'argentina',
//         club: 'Inter miami'
//     },
//     {
//         id: 2,
//         name: 'Cristiano ronaldo',
//         country: 'porugal',
//         club: 'al Nassr'
//     },
//     {
//         id: 3,
//         name: 'lukas modric',
//         country: 'Croatia',
//         club: 'real madrid'
//     },
//     {
//         id: 4,
//         name: 'Angel di Maria',
//         country: 'argentina',
//         club: 'Benfica'
//     }
// ]
// console.log(players[0].name, players[0].club)
// console.log(players[2].name, players[2].club)

// objects of Arrays
// const things = {
//     colours: ['white', 'Black', 'Orange', 'purple'],
//     Cars: ['toyota', 'Audi', 'Nissan', 'Honda'],
//     fruits: ['Apples', 'Banana', 'Mango', 'Berries']
// }
//  console.log(things.colours[3], things.Cars[3], things.fruits[2] )

// Arithmetic operators
// console.log(5 + 7);
// console.log(15 - 7);
// console.log(12 * 2);
// console.log(10 / 3);
// console.log(9 % 2); // Modulus Operator
// console.log(5 ** 4); // exponential operator

// Shorthand operators
// let total = 0
// let price = 50
// total += price
// console.log(total)

// // Assignment operator
// let x = 10

// comparison operators
// console.log(5 == '5');
// console.log(5 != 8)
// console.log(5 === 9)
// console.log(8 !== 8)
// console.log(10 > 5)
// console.log(7 < 3)
// console.log(3 >= 8)
// console.log(5 <= 9)

// logical operator
// And operators
// let x = 10
// let y = 1
// console.log(x == 5 && y > 3);
// console.log(x >= 5 || y > 3);

// string operators
// string concatentation
// let school = 'GoMyCode'
// let address = '230 Herbert Macaulay way'
// let direction = ' I attend ' + school + ' at ' + address
// console.log(direction);



// // template literal
// let navi = `I attend ${school} at ${address}`
// console.log(navi)


// conditional statement
// if statement
// let name = 'Jenny'
// if(name == 'James'){
//   console.log(`my name is ${name}`)
// }
// else if (name == 'Mickly'){
//   console.log(`my name is ${name}`)
// }
// else if (name == 'Jane'){
//   console.log(`my name is ${name}`)
// }
// else{
//   console.log(`name does not match}`)
// }

// switch statement 
// function decodeColour(){
//   let colour = prompt('choose a colour')
//   switch(colour){
//     case 'white': alert('you chose white')
//     break;
//     case 'black': alert('you chose black')
//     break;
//      case 'blue': alert('you chose blue')
//     break;
//     case 'green': alert('you chose green')
//     break;
//     default:
//       alert('you chose an invalid colour')
//   }
// }

// decodeColour()

//Ternary operator
// let marks = prompt('Enter your score');
// let results = (marks >= 40) ? 'pass' : 'Fail'
// alert(results)

// chained Ternary operator
// let num = 30
// let val = (num <= 40) ? 'You failed' : (score > 40 && score <= 75) ? 'You passed' : (score > 75 && score <= 100) ?'You did extremely well' : 'You did not write the exam'
// console.log(result)

// increment ++
// let number = 5
// number++
// console.log(number)

// // decrement
// let number = 5
// number--
// console.log(number)

// iteration
// loops
// while loop
// let num = [3, 5, 8, 2]
// let sum = 0
// let i = 0
// while(i < num.length){
//   sum += num[i]
//   i++
// }
// console.log(sum);

// Do-while loop
// let num = [3, 5, 8, 2, 0]
// let sum = 0
// let i = 0
// do{
//   sum += num[i]
//   i++
// }while(i < num.length)
//   console.log(sum);

  // For loop
  // let num = [3, 5, 8, 2]
  // let sum = 0
  // for(let i = 0; i < num.length; i++){
  //   sum += num[i]
  // }
  // console.log(sum);

  // QUESTION 2
 // function checkaverage()
  //   let num = [45, 78, 80, 66, 90]
  //   let sum = 0
  //   for(let i = 0; i < num.length; i++){
  //   sum += num[i]
  // }
  //   let average = sum / num.length;
  //   let passed = (average >= 50) ? 'Passed' : ' Fail';
  
  // console.log(passed)

// question 3
// function greeting(){
//   let name = prompt('Enter your name')
//   let time = new Date().getHours()
//   if(time < 12)
// } V