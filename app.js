let container = document.querySelector(".container");
let demo = document.querySelector("#mainbtn");
let cancel = document.querySelector(".cancelbtn")



demo.addEventListener("click",function() {
    container.style.display="flex"
})

cancel.addEventListener("click",function() {
    container.style.display="none"
})

