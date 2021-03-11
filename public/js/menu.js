document.addEventListener("DOMContentLoaded",function(){
    const menuFood = document.querySelectorAll(".menu-card-img a");

    menuFood.forEach(elem=>{
        elem.addEventListener("click",(event)=>{
            event.preventDefault();
           const smoot = event.currentTarget.getAttribute("href");
           window.scrollTo({
               top: smoot==="#" ? 0: document.querySelector(smoot).offsetTop,
               behavior:"smooth"
           })
        })
    })



     const sectionk= document.querySelectorAll("section");
     console.log(sectionk);
})