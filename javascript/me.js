const countElement=document.querySelector(".loader")
const fixedLoader=document.querySelector(".fixed-loader")
const hero=document.querySelector(".hero")
const navSection=document.querySelector(".nav-section")
let count=0 
document.body.style.overflowY="hidden"
 let interval=setInterval(() => {
    count+=10
    if(count>=100){
        clearInterval(interval)
        fixedLoader.classList.add("fixed-remove")
        hero.classList.add("active")
        navSection.classList.add("active")
        document.body.style.overflowY="visible"
    }
    countElement.innerHTML=`${count}%`
},500);
const liner=document.querySelectorAll(".liner")
window.addEventListener("load",()=>{
   liner.forEach((line)=>{
    line.classList.add("add-liner")
   })
   if(history.scrollRestoration){
    history.scrollRestoration="manual"
   }
   else{
    window.scrollTo(0,0)
   }
})
const cusor=document.querySelector(".cursor")
window.addEventListener("mousemove",(e)=>{
    let x=e.x
    let y=e.y
    cusor.style.left=`${x}px`
    cusor.style.top=`${y}px`

})
const eye=document.querySelector(".eye-shape")
eye.addEventListener("mouseover", function(){
  eye.classList.remove("active")
})
  
const allLinks=document.querySelectorAll("a")
 allLinks.forEach(function(link){
    link.addEventListener("mouseover", function(){
       cusor.style.borderColor="purple"
       })
    link.addEventListener("mouseout", function(){
        cusor.style.borderColor="#fff"
            
    })
 })
 const allInput=document.querySelectorAll(".input")
 allInput.forEach(function(input){
    input.addEventListener("focus", function(){
       cusor.style.borderColor="purple"
       })
       input.addEventListener("focusout", function(){
        cusor.style.borderColor="#fff"
        })
 })

const fixedMenu=document.querySelector(".fixed-nav")
const hamBugar=document.querySelector(".ham-bugar")
hamBugar.addEventListener("click",()=>{
    hamBugar.classList.toggle("active")
    if(fixedMenu.classList.contains("active")){
        fixedMenu.classList.remove("active")
        setTimeout(function(){
            document.body.style.overflowY="visible"
        },1000)
    }
    else{
        fixedMenu.classList.add("active")
        document.body.style.overflowY="hidden"
        
    }

})
setInterval( function(){
    let date=new Date()
    let hour =date.getHours()
    let minute=date.getMinutes()
    let seconds=date.getSeconds()
    let year =date.getFullYear()
    let month=date.getMonth()
    hour=hour<10 ? "0" + hour: hour
    minute=minute <10 ?"0" + minute : minute
    seconds=seconds <10 ?"0" + seconds : seconds
let countDown=document.querySelectorAll(".time")
countDown.forEach(function(tim){
   tim.innerHTML=`
<div class="content">
<div class="box">${hour} :</div>
<div class="box">${minute} :</div>
<div class="box">${seconds}</div>
</div>
<h5>lagos nigeria</h5>
</div>
`
})
let months=["january","febuary","march", "april","may","june","july","august","september","october","november","december"]
month=months[month]
const season=document.querySelector(".season").innerHTML=`${month} ${year}`

},1000)
window.addEventListener("scroll",()=>{
    const scrollView=document.querySelectorAll(".scroll")
    scrollView.forEach(function(view){
        let scrollHeight=view.getBoundingClientRect().height
        if(window.scrollY>scrollHeight-70){
            view.classList.add("active")
            eye.classList.add("active")
        }
        else{
            view.classList.remove("active")
            eye.classList.remove("active")
        }
    })
    const section=document.querySelectorAll(".sections").forEach(function(sect){
        let sectTop=sect.getBoundingClientRect().top
        let windowHeight=window.scrollY
        if(windowHeight>sectTop){
            sect.classList.add("active")
        }
        else{
            sect.classList.remove("active")
        }
    })
    const ctt=document.querySelector(".tag1")
    let cttHeight=ctt.getBoundingClientRect().top
    if(window.scrollY>cttHeight){
        ctt.classList.add("active")
        eye.style.backgroundColor="#000"
        cusor.style.borderColor="#000"
    }
    else{
        ctt.classList.remove("active")
        eye.style.backgroundColor="#fff"
        cusor.style.borderColor="#fff"
    }
})
const DisplayGif=document.querySelector("#display-gif")
const imgMe=["/image11/black (2).JPG","/image11/lloyd.png","/image11/load2.GIF","/image11/load3.GIF","/image11/yellow.JPEG","/image11/load5.JPEG","/image11/cute.PNG","/image11/cute2.PNG","/image11/cc.JPG","/image11/model.JPG"]

function rand(){
    let randSrc=Math.floor(Math.random()*imgMe.length)
    DisplayGif.style.backgroundImage=`url(${imgMe[randSrc]})`
}
setInterval(rand, 2000)
const lins=document.querySelectorAll(".lin")
lins.forEach(function(lin){
    lin.addEventListener("click", function(e){
        e.preventDefault()
        const clipper =document.querySelector(".clipper")
        clipper.classList.add("active")
        fixedMenu.classList.remove("active")
        setTimeout(function(){
            clipper.classList.remove("active")
            hamBugar.classList.remove("active")
            document.body.style.overflowY="visible"
        },2000)
        
    const id=e.currentTarget.getAttribute("href").slice(1)
    const sections=document.getElementById(id)
    const navSection=document.querySelector(".nav-section")
    let navHeight=navSection.getBoundingClientRect().height
    let position=sections.offsetTop-navHeight
    window.scrollTo({
        left:0,
        top:position
    })
    })
})
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const names=document.querySelector("#name")
const email=document.querySelector("#email")
const form=document.querySelector("form")
const textarea=document.querySelector("#messages")
form.addEventListener("submit",()=>{
    checkInputValidation()
})
function checkInputValidation(){
    const nameval=names.value.trim()
    const emailval=email.value.trim()
    const mval=textarea.value.trim()
    if(nameval===""){
        setError(names,"please enter your first name")
    }
    else{
        setSuccess(names, "")
    }
    if(mval===""){
        setError(textarea,"message field cannot be empty")
    }
    else if(mval.length<30){
        setError(textarea,"message should be be atleast 30 words long")
    }
    else{
        setSuccess(textarea, "")
    }
    if(emailval===""){
        setError(email,"email should not be empty")
    }
    else if(!isEmailValid(emailval)){
        setError(email,"not a valid email")
    }
    else{
        setSuccess(email,"")
        if(emailval !=="" && isEmailValid(emailval) && nameval !=="" && mval !=="" && mval.length>30){
            const info=document.querySelector(".info")
            info.classList.add("active")
            setTimeout(function(){
                info.classList.remove("active")
            },2000)
          }
    }
}


function setError(input,message){
    const formControl=input.parentElement
    const errorMe=formControl.querySelector(".error")
    errorMe.innerText=message
    formControl.classList.remove("success")
    formControl.classList.add("error")
   
   }
   function setSuccess(input,message){
       const formControl=input.parentElement
       const errorMe=formControl.querySelector(".error")
       errorMe.innerText=message
       formControl.classList.add("success")
       formControl.classList.remove("error")
      
}
