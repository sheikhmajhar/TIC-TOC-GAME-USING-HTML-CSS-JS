let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let msgContainer = document.querySelector(".msg-container")
let newGame = document.querySelector("#new")
let msg = document.querySelector("#msg")

let plyero = true;

let array = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

]
boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (plyero === true) {
            box.innerText = "O"
            box.style.color = "blue"
            plyero = false


        } else {
            plyero === false
            box.innerText = "X"
            box.style.color = "orange"
            plyero = true

        }
        box.disabled = true;
        chekWinner();


    })

})
const chekWinner = () => {
    for (let pattern of array) {
           
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;

        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 === post2 && post2 === post3) {
                showWinner(post1)

            }
        }



    }
}
const showWinner = (Winnner) => {
    msg.innerText = `Congratulation, Winnner ${Winnner}`

    msgContainer.classList.remove("hide")
    disabledboxes()
}
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const resetGame = () => {
    plyero = true
    msgContainer.classList.add("hide")
    enabledboxes()
}
newGame.addEventListener("click", resetGame)
reset.addEventListener('click', resetGame)














































// let h1 = document.querySelector("h1")
// h1.onclick = () => {
//     let a = 35;
//     a += 1
//     console.log
//     console.log("this is my heading")
//     h1.style.color = "red"
// }

