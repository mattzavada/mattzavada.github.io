let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Offer only vegan options");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Offer some vegan options");
} else {
  console.log("Offer no vegan options");
}
