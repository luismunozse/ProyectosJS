let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")

/*console.log(btns)*/

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.currentTarget.classList)
    })
})