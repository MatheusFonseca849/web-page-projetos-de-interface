const darkMode = () => {
    const darkModeBtn = document.getElementById("darkModeBtn")
    const body = document.getElementById("body")

    if(body.classList.contains("darkMode") == false){
        body.classList.add("darkMode")
        darkModeBtn.innerHTML = "<i class='fa-solid fa-sun fa-xl'></i>"
    }else{
        body.classList.remove("darkMode")
        darkModeBtn.innerHTML = "<i class='fa-solid fa-moon fa-xl'></i>"
    }
}

const darkModeBtn = document.getElementById("darkModeBtn")
darkModeBtn.addEventListener("click", () => {
    darkMode()
})