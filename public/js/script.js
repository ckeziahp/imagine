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
  
  