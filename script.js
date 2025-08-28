// === Part B1: Variables & Data Types ===
let nickname = "Adebayo";           // string
const luckyNumber = 7;               // number
var isStudent = true;                // boolean
let nothingHere = null;              // null
let notAssigned;                     // undefined

console.log("B1 — Variables & Data Types:");
console.log("nickname (string):", nickname);
console.log("luckyNumber (number):", luckyNumber);
console.log("isStudent (boolean):", isStudent);
console.log("nothingHere (null):", nothingHere);
console.log("notAssigned (undefined):", notAssigned);

// Utility: select helpers
const $ = (sel, scope=document) => scope.querySelector(sel);
const $$ = (sel, scope=document) => Array.from(scope.querySelectorAll(sel));

// === Part B2: Arrays & Objects ===
const favoriteMovies = ["Inception", "The Dark Knight", "Interstellar", "Whiplash", "Spider-Man: Into the Spider-Verse"];

const moviesList = $("#movies-list");
favoriteMovies.forEach(movie => {
  const li = document.createElement("li");
  li.textContent = movie;
  moviesList.appendChild(li);
});

const student = {
  name: "Adebayo Ojo",
  age: 24,
  skills: ["JavaScript", "HTML", "CSS"]
};

const studentCard = $("#student-card");
studentCard.innerHTML = `
  <ul>
    <li><strong>Name:</strong> ${student.name}</li>
    <li><strong>Age:</strong> ${student.age}</li>
    <li><strong>Skills:</strong> ${student.skills.join(", ")}</li>
  </ul>
`;

// === Part C1: Functions — calculateSquare ===
function calculateSquare(number){
  const n = Number(number);
  if (Number.isNaN(n)) return NaN;
  return n * n;
}

// Call 3 times (console + page)
const squareResults = $("#square-results");
const demoInputs = [2, 5, 12];
demoInputs.forEach((n, i) => {
  const result = calculateSquare(n);
  console.log(`C1 — calculateSquare call ${i+1}: ${n}^2 = ${result}`);
  const p = document.createElement("p");
  p.className = "fade-in";
  p.textContent = `${n}² = ${result}`;
  squareResults.appendChild(p);
});

// Let user input a number via form
$("#square-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#square-input").value.trim();
  const result = calculateSquare(input);
  const p = document.createElement("p");
  p.className = "fade-in";
  p.textContent = Number.isNaN(result) ? "Please enter a valid number." : `${input}² = ${result}`;
  squareResults.appendChild(p);
});

// === Part C2: Conditional Logic — prompt age ===
window.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  const ageStr = prompt("Enter your age:");
  if (ageStr !== null) {
    const age = Number(ageStr);
    if (!Number.isNaN(age)) {
      if (age < 18) alert("You are a minor");
      else if (age <= 60) alert("You are an adult");
      else alert("You are a senior citizen");
    } else {
      alert("Please enter a valid number for age next time.");
    }
  }

  // === Part C3: Loops ===
  // For loop: print 1..10 in console
  console.log("C3 — For loop 1..10");
  let forOut = [];
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    forOut.push(i);
  }
  $("#for-output").textContent = forOut.join(" ");

  // While loop: sum 1..5, display on page
  let sum = 0;
  let j = 1;
  while (j <= 5) {
    sum += j;
    j++;
  }
  $("#while-sum").textContent = `Sum of 1..5 = ${sum}`;
});

// === Part D1: Button & Events — Change background randomly ===
function randomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
$("#bg-btn").addEventListener("click", () => {
  document.body.style.background = randomColor();
});

// === Part D2: Simple Form Validation ===
$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  let valid = true;

  // clear old messages
  $("#name-error").textContent = "";
  $("#email-error").textContent = "";
  $("#message-error").textContent = "";
  $("#form-status").textContent = "";
  $("#form-status").className = "status";

  if (!name){
    $("#name-error").textContent = "Name is required.";
    valid = false;
  }
  if (!email){
    $("#email-error").textContent = "Email is required.";
    valid = false;
  } else if (!email.includes("@")){
    $("#email-error").textContent = "Email must contain '@'.";
    valid = false;
  }
  if (!message){
    $("#message-error").textContent = "Message is required.";
    valid = false;
  }

  if (valid){
    $("#form-status").textContent = "Form submitted successfully!";
    $("#form-status").classList.add("ok");
    // Reset form for demo
    e.target.reset();
  }
});
