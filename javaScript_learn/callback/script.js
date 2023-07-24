console.log("hello");
setTimeout(function () {
    console.log("after 3sec");
},3000)
console.log("word");
function makedough(){
    setTimeout(()=>{
        const dough=cheese+'🍩;'
        console.log('here is the dough',dough);
    },2000);
}
console.log(makedough);