let danger = document.getElementById("password");
let doubleDanger = document.getElementById("confirmPassword");
let btn =  document.querySelector(".btn")

let a = danger.addEventListener("change", (e) =>{
    let password = e.target.value
    console.log(password)
});

let b = doubleDanger.addEventListener("change", (e) =>{
    let confirmPassword = e.target.value
    console.log(confirmPassword)
});

btn.addEventListener("click",()=>{
    if(a !== b){
         danger.classList.toggle("error")
    }
})