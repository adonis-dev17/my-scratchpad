// const greetings = { word1: 'hello', word2: 'world!'}

// let greet = () => {return greetings['word1'] + ' ' + greetings['word2'];}

// document.getElementById('demo').innerHTML = greet();

// const greetings = { word1: 'Hello', word2: 'World', greet: function() { return this.word1 + ' ' + this.word2;}}
// document.getElementById('demo').innerHTML = greetings.greet()

// const shout = { rap1: 'HipHop', rap2: 'Hooray!', combine: function() { return this.rap1 + ' ' + this.rap2;}}
// document.getElementById('demo').innerHTML = shout.combine();

// document.getElementById('showtime').addEventListener('click', clicker)

// function clicker() {
//   this.innerHTML = Date();
// }

// *********All about Objects***********
//1. Create an empty object called spaceship.
let spaceship = {};
//2. Create an object called fasterShip with two key-value pairs
let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  }
//3. Use Dot Notation to access properties.
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // Write your code below
  let crewCount = spaceship.numCrew;
  
  let planetArray = spaceship.flightPath;

//4. Use Bracket Notation, 
//4.1  Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
let isActive = spaceship['Active Mission'];
//4.2 Use bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
console.log(spaceship[propName]);

//5. Property Assignment
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
//5.1 Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship['color'] = 'glorious gold';
//5.2  Add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship['numEngines'] = 8;
//5.3 Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];

//6. Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
//6.1 Create an alienShip object, contain method retreat(), console log retreatMessage.
let alienShip = {
    retreat() {
      console.log(retreatMessage);
    },
//6.2 Add method takeOff()
takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
//6.3 Invoke your two methods: first .retreat() then .takeOff().
alienShip.retreat();
alienShip.takeOff();

//7. Nested Objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
//7.1 Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
let capFave = spaceship.crew.captain['favorite foods'][0];

