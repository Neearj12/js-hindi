const getrollno=()=>{
setTimeout(() => {
    console.log('api getting roll no');
    let roll_no=[1,2,3,4,5];
    console.log(roll_no);
    setTimeout((roll_no) => {
        const bio={
            name:'neeraj',
            age:26
        }
        console.log(`my name is ${bio.name} and i am ${bio.age} years old`);
        
    }, 2000,roll_no[1])
}, 2000);


getrollno();
}