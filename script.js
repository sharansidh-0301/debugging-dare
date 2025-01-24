let login_btn=document.querySelector("#login-menu"),login_pop=document.querySelector(".login-pop-up"),close_login_page=document.querySelector(".close-x")
login_btn.addEventListener("click",(event)=>{
    event.preventDefault() 
    login_pop.style.display="block"
})
close_login_page.addEventListener("click",(event)=>{
    event.preventDefault()
    login_pop.style.display="none"
})
let easy_question=document.querySelector(".easy_question"),intermediate_question=document.querySelector(".intermediate-question"),hard_question=document.querySelector(".hard-question")
let anime_1=document.querySelector("#anime-1"),anime_2=document.querySelector("#anime-2"),anime_3=document.querySelector("#anime-3")
easy_question.addEventListener("click",()=>{
    anime_1.style="left:250px;"
})