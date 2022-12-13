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
        },1000)
    }
    else{
        fixedMenu.classList.add("active")
        
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
        if(window.scrollY>scrollHeight){
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
    })
    const sk=document.querySelectorAll(".sk")
    sk.forEach(function(s){
        let sHeight=s.getBoundingClientRect().top
        if(window.scrollY>sHeight){
            s.classList.add("active")
        }
    })
    const line=document.querySelectorAll(".len")
    line.forEach(function(ls){
        let lsHeight=ls.getBoundingClientRect().top
        if(window.scrollY>lsHeight){
            ls.classList.add("active")
        }
    })
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
        const cliptext =document.querySelector(".clip-text")
        clipper.classList.add("active")
        cliptext.classList.add("active")
        fixedMenu.classList.remove("active")
        setTimeout(function(){
            clipper.classList.remove("active")
            cliptext.classList.remove("active")
            hamBugar.classList.remove("active")
            document.body.style.overflowY="visible"
        },2000)
   const clip=document.querySelector(".clip")
    const id=e.currentTarget.getAttribute("href").slice(1)
    let child=e.currentTarget.children[0].innerHTML
    const sections=document.getElementById(id)
    const navSection=document.querySelector(".nav-section")
    let navHeight=navSection.getBoundingClientRect().height
    let position=sections.offsetTop-navHeight
    
    clip.innerHTML=`${id} ${child} .`
    setTimeout(function(){
        window.scrollTo({
            left:0,
            top:position
        })
    },1000)
    })
})
