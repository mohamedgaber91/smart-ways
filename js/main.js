
new WOW().init();


// to up in the website bu using section not debend on the page

 let sahm = document.querySelector(".sahm");
 let knowcontent=document.querySelector(".knowcontent");



 window.onscroll=function(){


  let knowofset2= knowcontent.offsetTop;
  let knowheight2= knowcontent.offsetHeight;
  let windowh = this.innerHeight;
  let page=this.pageYOffset;

  let value2ofknow=knowofset2+knowheight2-windowh;


  if(page>=(value2ofknow-50)){
    sahm.style.display="block";
  }
 else{
    sahm.style.display="none";
  }

 }
  
  sahm.onclick=function(){
    window.scrollTo({
      left:0,
      top:0,
      behavior:"smooth"
    })
  }


 


