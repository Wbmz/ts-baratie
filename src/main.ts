const args = process.argv.slice(2);

const multiplier = args[0];
const cooksPerKitchen = args[1];
const time = args[2];

console.log('Multiplier for the cooking time of the dish : ' + multiplier);
console.log('Number of cooks per kitchen : ' + cooksPerKitchen);
console.log('Time in milliseconds, used by the kitchen stock to replace ingredients : ' + time);
