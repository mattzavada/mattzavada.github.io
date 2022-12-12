//Challenge

let age = 84;
let ageRange;

if (age <= 7) {
  ageRange = "a child";
} else if (age >= 65) {
  ageRange = "a senior";
} else {
  ageRange = "an adult";
}

console.log("Based on your age you are " + ageRange);
