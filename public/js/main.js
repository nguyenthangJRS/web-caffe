document.addEventListener("DOMContentLoaded",function(){
    const scrollToTop = document.querySelector(".scrollToTop");
    const imgApear = document.querySelectorAll(".apearen");
    console.log(imgApear);
//     const smoothElement = document.querySelectorAll(".menu a");
//     const smoothBottomMenu = document.querySelectorAll(".access a");
    
    let option ={
        threshold:1,
        rootMargin: "0px 0px -25px 0px"
 }
// // scroll element
//     smoothElement.forEach(elem=>{
//         elem.addEventListener("click",(event)=>{
//             event.preventDefault();

//             const getId = event.currentTarget.getAttribute("href");
//             window.scrollTo({
//                 top: getId==="#"? 0: document.querySelector(getId).offsetTop,
//                 behavior:'smooth'
//             })
//         })
//     })


// scroll element

 // apear img
    const observer= new IntersectionObserver(function(entries,observer){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.toggle("apear");
                observer.unobserve(entry.target);
            }
        })
    },option);
    imgApear.forEach(fate =>{
        observer.observe(fate);
    })
    
 // apear img
    
    // scroll page
  window.addEventListener("scroll",function(){
      var pageY= window.pageYOffset;
      if(pageY>350){
        scrollToTop.style.display="block";
        scrollToTop.style.opacity="1";
        // scrollToTop.style.transform=`translateY(${0})`;
        scrollToTop.style.transition="display 1s ease";
      }else{
        scrollToTop.style.display="none";
        scrollToTop.style.opacity="0";
        scrollToTop.style.transition="all 0.5s ease-in-out";
      }
  })
    // scroll

    //scroll to top
    scrollToTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
});
    //scroll to top
  
})