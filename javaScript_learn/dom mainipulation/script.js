// //  const mybody=document.body;
// //  console.log(mybody);
// // const box2= document.getElementById("box-2");
// // console.log(box2);
// // const div=document.getElementsByTagName("div");
// // console.log(div);
// // const boxs=document.getElementsByClassName("box");

// const box1=document.getElementById("box-1");
// // box1.innerHTML='<h1> hello word </h1>';
// box1.style.backgroundColor="red";
// box1.classList.add("round-border");

// const newpara=document.createElement('p');
// newpara.innerText="this is brabnd new";
// const cantainer=document.getElementById('cantainer');
// cantainer.appendChild(newpara);
function myfunction(){
    console.log("i was clicked");
}
function mouseOver (){
    console.log("mouse over");
}
function keyPressEvent(){
    console.log("key was press");
}
const box1=document.getElementById('box-1');
box1.addEventListener("click",()=>{
    console.log("click by event");
})
const nameInput=document.getElementById("nameInput");
nameInput.addEventListener("keypress",(e)=>{
    console.log("key",e.key);
})