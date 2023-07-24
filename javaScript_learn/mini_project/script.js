const accordian=document.querySelectorAll(".accordian");
accordian.forEach(accordian=>{
    const icon=accortdian.queryselector(".icon");
    const answer=accortdian.queryselector(".answer");
    accordian.addEventListener("click",()=>{
        if(icon.classList.cantains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add("active");
            answer.style.maxHeight=answer.scrollHeight+'px';
        }
    })
})
