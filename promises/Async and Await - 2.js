console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMoview = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));
  const addButter = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrinks = new Promise((resolve, reject) =>
    resolve("getcolddrinks")
  );

  let ticket = await promiseWifeBringingTicks;
  console.log("wife: I have the tics");
  console.log("husband: we should go in");
  console.log("wife: no I am hungry");

  let popcorn = await getPopcorn;
  console.log("wife: I have the tics");
  console.log("husband: we should go in");
  console.log("wife: no I am hungry");

  let butter = await addButter;
  console.log(`husband: I got some${butter} on popcorn`);
  console.log(`husband: anything else darling?`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband: thank you for the reminder *grins*`);

  let coldDrinks = await getColdDrinks;
  console.log("husband: I got ColdDrinks");

  return ticket;
};
preMoview().then((m) => console.log(`person3: shows${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
