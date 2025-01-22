let login_btn=document.querySelector("#login-menu"),login_pop=document.querySelector(".login-pop-up"),close_login_page=document.querySelector(".close-x")
login_btn.addEventListener("click",(event)=>{
    event.preventDefault() 
    login_pop.style.display="block"
})
close_login_page.addEventListener("click",(event)=>{
    event.preventDefault()
    login_pop.style.display="none"
})