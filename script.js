//js fundamental
$(document).ready(function(){
    $("#myButton").click(function(){
      $("#demo").html("Anda telah mengklik tombol menggunakan jQuery!");
    });
  });

  //function
  //1
function cetakHati() {
    console.log("<3");
  }
  
  cetakHati();
//2
function multiply(a, b) {
  
    return a + b;
  }
  
  console.log(multiply(2, 3)); 
  console.log(multiply(9, 9)); 
  console.log(multiply(5, 4)); 
//3
let animal = "Giant Pacific Octopus";

function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}

observe(); 


  let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal(); 
console.log(deadlyAnimal); 

  //4
  const sayHello = (name) => `Hello ${name}!`;

  console.log(sayHello("Hagrid")); 
  console.log(sayHello("Luna"));   

  //control flow
  for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

//exception case

function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");


  function bagi(pembilang, penyebut) {
    
    if (typeof pembilang !== 'number' || typeof penyebut !== 'number') {
      return "Input harus berupa angka";
    }
  

    if (penyebut === 0) {
      return "Tidak dapat membagi dengan nol";
    }
  

    return pembilang / penyebut;
  }
  
  console.log(bagi(10, 2)); 
  console.log(bagi(5, 0)); 
  console.log(bagi("a", 3)); 
  console.log(bagi(3));

  // string array case

  let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

  function tampilkanAntrian() {
    console.log("Antrian saat ini:", antrian.join(", "));
  }
  
  
  antrian.push("Nabila");
  antrian.push("Maza", "Elsi");
  
  
  antrian.pop();
  
  
  antrian.shift();
  antrian.shift();
  
  
  antrian.unshift("Tomi");
  
  
  tampilkanAntrian();