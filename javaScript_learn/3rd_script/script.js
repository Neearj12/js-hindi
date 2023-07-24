// function sum(a,b) {
// //     const sum=a+b;
// //     console.log("the result is",sum);
// // }
// // const a=90;
// // const b=8;
// // sum(a,b); 
function addsquare(a,b) {
    const sa=square(a);
    const sb=square(b);
    function square(num) {
        return num*num;
    }
    return sa+sb;
}
console.log(addsquare(5,4));  
