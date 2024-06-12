const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name; 
}

// Variables
const pi = 3.142;
let name = 'Priscilla Keziah';
let age = 219;
let present = false;
console.log(name);

// objects
const car = {
    numberPlate:'GR-345-24',
    model: 'Bentley',
    color: 'silver',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Priscilla Keziah Cudjoe',
        driver: {
            name:'fiifi',
            license: ''
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.model = 'Porsche'
console.log(car);
car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);

// Arrays
const tweet1 = {
    text: "I learning js today.",
    likes: 5,
    share: 2,
    retweet:1,
  }
  
  const tweet2 = {
    text: "I learning arrays today.",
    likes: 1000,
    share: 50,
    retweet:1250,
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours() == 16) {
    console.log('Class has ended');
  } else {
    console.log('Class is in session');
  }

    // For Loop
    for (let i = 0; i <=9; i++) {
    console.log('Notify friends!', i);
  }
  
  // Functions
// Defining funtions
function login(username,password) {
  if (username =='ckeziah'&& password =='1234'){
     return 'User is logged in!';
  }else{
    return 'Invalid username or password!';
  }
 }
 // Invoking functions
 login('ckeziah','1234');
 
 // Basic Arithmetic
 12 + 64;
 3 + 5;
 7 * 12;
 78 / 4;
 78 % 4;
 
 37/24
 // Comparison operators
 2 == 2 ;
 2 == '2';
 3 !== 2;
 3 !== 3;
 
 //Built-in Math funtions
 Math.round(37/24);
 Math.floor(37/24);
 Math.ceil(37/24);
 Math.random();
 Math.max(78, 12, 21, 87);
 
 Math.ceil(Math.random() * 1000000)
 
 // Order of operations
 1 * 2 + 3 - 4 / 2 % 2**2
 
 // Handling user inputs
 1200 + Number('250') ;

 // String Concatenation
const firstname = 'Priscilla';
const lastname = 'Cudjoe';
firstname + lastname;

// Template literial
`${firstname.trim()} ${lastname.trim()}`;

//String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + '' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(1)
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

// String conversion
String(2014)

// Write a function that will add a participant to our Google Classroom
// function addParticipant (){ 
//   return 'Participant added successfully!';
// }

// addParticipant();

const participants=[];
function addParticipant(email){ 
  // check if email was provided
  if (!email){
    return 'Email not provided';
  }
  // check if email is valid
  if (!email.includes('@')){
    return 'invalid email provided!'
  }
  // Add email to the participants;
  participants.push(email);
    // notify them via email
    // return response
 return 'Participant added successfully!.';
}
addParticipant('ccccc@yahoo.com');

// Arrays in JavaScript
const alphabets = ['A','B','C'];
alphabets.join('');
alphabets.join('').split('');


// // write a funtion that takes a user with name and dateOfBirth and returns true if their birthday is today else false

// const user = {
//   name: 'Martin King',
//   dateOfBirth:'1990-06-12'

// };

function isBirthday(user){
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth() === birthDate.getMonth() && 
      today.getDate() === birthDate.getDate()
     ){
    return true;
  } else{
    return false;
  }
  return('true');
}
 isBirthday(user);
  

// write a funtion that takes a user with name and dateOfBirth and returns birthday with their if their birthday is today else return is not birthday

function BirthdayMessage(user){
  const today = new Date();
  const userBirthday = new Date(user.dateOfBirth);
  // console.log(getBirthdayMessage(user));
  
  if (today.getMonth() === userBirthday.getMonth() && 
      today.getDate()=== userBirthday.getDate()){
    const age = today.getFullYear() - userBirthday.getFullYear();
    return `Happy Birthday, ${user.name}!`;
  } else{
    return 'not your day'
  }
}
BirthdayMessage(user);



BirthdayMessage();

// Objects in JavaScript