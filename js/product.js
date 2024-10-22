
let proheading=document.querySelector(".proheading");
let sahm =document.querySelector(".sahm")


window.onscroll=function(){
    let proffset= proheading.offsetTop;
    let proheight= proheading.offsetHeight;
    let windowh = this.innerHeight;
    let page=this.pageYOffset;
    let valueofpro = proffset+proheight-windowh;
    if(page>=(valueofpro)){
        proheading.style.animationPlayState="running";
        sahm.style.display="block"
    }
    else{
        sahm.style.display="none"
    }
    sahm.onclick=function(){
        window.scrollTo({
          
            left:0,
            top:0,
            behavior:"smooth"


        })
    }
  
}