//Exercice 1 : Liste Des Personnes
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2, 1, "Jason");
console.log(people);
people.push("Fanta");
console.log(people);
index = people.indexOf("Mary");
console.log(index);
let newTab = people.slice(0 , 3);
console.log(newTab);

//let Tab = people.slice(1 , 5);
//console.log(Tab);

let a = people.indexOf("foo");
console.log(a);

let b = people[people.length - 1];
console.log(b);
// Partie 2: question2
let person;
for (person of people){
    console.log(person);
}
// Partie 2: question2 
for (person of people){
    if(person == "Jason"){
        console.log(person);
        break;
    }
}

//Exercise 2 : Your Favorite Colors
let colors = ["Blue", "Green", "Pink", "purple", "Yellow"];
let color;
for(color of colors){
    console.log("My #" + (colors.indexOf(color) +1) + " choice is " + color);
}

let bonus =["1st", "2nd", "3rd", "4th", "5th"];
let col;
for(color of colors){
    for(let i of bonus){
        console.log("My " + i + " choice is " + color);
    }
}

//Exercise 3 : Repeat The Question
let newNumber;
let number = prompt("Enter a number");
let entier = +number;
console.log(typeof(entier));
while( entier < 10){
    newNumber = prompt("Enter a new number");
    break;
}

//Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log("Le numero de la fleur de building est: " + building['numberOfFloors']);
console.log(building.numberOfAptByFloor.firstFloor + " et " + building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1] + "  " + building.numberOfRoomsAndRent.dan);
let somme = building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1] ;
if(somme > building.numberOfRoomsAndRent.dan[1]);
{
   let c = +building.numberOfRoomsAndRent.dan[1];
   let d = c + 1200;
    console.log(d);
}

//Exercise 5 : Family

let family = {
    name : "KAMATE",
    prenom : "Fanta",
    login : "Fatim"
}

for( let i in family){
    console.log(Object.keys(family));
    break;

}


for( let i in family){
    console.log(family[i]);

}

//Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  
  let result = " ";
  for (let j in details){
    result = result + " " + j  + " " + details[j];
    
  }
  console.log(result);

  //Exercise 7 : Secret Group

  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

  let char = " ";
  let ordre = names.sort();
  for (let k of ordre){
    
    char =  char + k.charAt(0);

    
  }

  console.log(" the name of their secret society is : " + char);