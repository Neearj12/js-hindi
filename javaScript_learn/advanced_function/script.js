// const greet=()=> {

//     console.log("hello word");
// };
// greet();

// call back_function
// const calculate=(a,b,operation)=>{
//     return operation(a,b);
// }
// const result= calculate(3,4,function(num1,num2){
// return num1+num2;
// })
// console.log(result);
const a=[2,5,-2,8,9,3,6];
const firstneg=(num)=>{
    return num<0;
}
 const res=a.find(firstneg)
 console.log(res);