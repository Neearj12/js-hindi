const name="neeraj"
const repocount=50
// console.log(name+repocount+"suyalbari");
console.log(`heloo my name is ${name} and my repocount is ${repocount}`);
const gamename=new String(`neerajjsaj`)
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename);
const newString=gamename.substring(-8,4)
console.log(newString);
const anotherString=gamename.slice(-8,4)
console.log(anotherString);
const newStringOne="   neeraj   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://neeraj.com/neeraj%20joshi"
console.log( url.replace('%20','_'));
console.log( url.includes('neeraj'));
console.log(gamename.split('_'));