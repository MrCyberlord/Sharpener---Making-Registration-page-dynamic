console.log("person1: shows ticket");
console.log("person2: shows ticket");

const PromiseWife = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 3000);
});

const getpopcorn = PromiseWife.then((t) => {
  console.log("wife: i have the tickets");
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");
  return new Promise((resolve, reject) => resolve(`${t} Popcorn `));
});

const getbutter = getpopcorn.then((u) => {
  console.log("husband: i got some popcorn");
  console.log("husband: we should go in");
  console.log("wife: i need butter on my popcorn");
  return new Promise((resolve, reject) => resolve(`${u} Butter`));
});

const getcolddrinks = getbutter.then((v) => {
  console.log("husband: i got butter");
  console.log("husband: we should go in");
  console.log("wife: i need colddrinks");
  return new Promise((resolve, reject) => resolve(`${v} Colddrinks`));
});

getcolddrinks.then((w) => console.log(w));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
