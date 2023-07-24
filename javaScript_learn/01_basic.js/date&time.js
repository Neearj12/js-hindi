// // Dates
// // let mydate=new Date()
// // console.log(mydate);
// // console.log(mydate.toString());
// // console.log(mydate.toUTCString());
// // console.log(typeof(mydate));
// let mycreatedDate=new Date("2023-01-14")
// console.log(mycreatedDate.toLocaleDateString());
// // ******Time stamp ********
// // let mytimestamp=Date.now()
// // console.log(mytimestamp);
// console.log(Math.floor( Date.now()/1000));
let newdate=new Date()
console.log(newdate.getDay());
newdate.toLocaleString('default',{
    weekday:"long"
})