const userInputString = prompt("Please select some flavor.", "Vanilla");

const stringArray = userInputString.split(",");

const count = {};
for (const element of stringArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);
