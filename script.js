let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgContain = document.querySelector("#msg-contain")
 
let turnO = true;

let winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        if(turnO){//player O
            box.innerHTML = "O"
            turnO = false
        } else{ //player X
            box.innerHTML = "X";
            turnO = true
        }
        box.disabled = true

        checkWinner();
    });
});

const disablebtn = function(){
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebtn = function(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
        msg.style.display = "none"
        newGamebtn.style.display = "none"
        reset.style.display = "inline"
    }
};

const showWinner = function(winner){
  msg.innerHTML = `Congratulation, winner is  "${winner}"`;
  msg.style.display = "inline"
  newGamebtn.style.display = "inline"
  reset.style.display = "none"
  disablebtn();
}

const checkWinner = function(){
    for(pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val!= "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",  pos1val);
                showWinner(pos1val)
            };
        };
    };
};

const resetGame = function() {
    turnO = true;
    enablebtn();
}

newGamebtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)