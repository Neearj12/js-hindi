// const marvel=["thor","ironman","spiderman"]
// const dc=["superman","flash","batman"]
// // marvel.push(dc)
//  const allarr=marvel.concat(dc)
// console.log(allarr);
// // console.log(marvel[3][1]);
// const all_new=[...marvel,...dc]
// console.log(all_new);
 const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_arr=another_arr.flat(Infinity)
 console.log(real_arr);

 console.log( Array.isArray("neeraj"));
 console.log( Array.from("neeraj"));
console.log( Array.from({name:"neeraj"})); //intersting***** 


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));