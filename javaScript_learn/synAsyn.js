// It is a synchronous way
// const fun2=()=>{
//     console.log("fun2 is started");
// }

// const fun1=()=>{
//     console.log("fun is string");
//     fun2();
//     console.log("it is end");
// }

// fun1();
// it is Async way
const fun2=()=>{
    setTimeout(() => {
        console.log("set time started");
    },3000);
}
const fun1=()=>{
    console.log("fun1 is started");
    fun2();
    console.log("fun1 is endded");
}
fun1();
