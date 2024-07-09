let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;  // O   // X



const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
    
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        // count++;

        // let isWinner = checkWinner();

        // if(count === 9 && ! isWinner) {
        //     gameDraw();
        // }
    });
})



// const gameDraw = () => {
//     msg.innerText = "Game was Drawn";
//     msgContainer.classList.remove("hide");
//     disableBtn();
// }



const resetGame = () => {
    turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide");
}


const enableBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
 }


const showWinner = (winner) => {
     msg.innerText = `Congratulations , Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBtn();
}


const checkWinner = () => {
    for(pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText


        if(pos1 != "" && pos2 != "" &&pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("Winner is " + pos1);
                showWinner(pos1);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click" , resetGame); 