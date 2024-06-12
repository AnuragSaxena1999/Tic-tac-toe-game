
const gameModal = document.querySelector(".game-modal")
const heading = document.querySelector(".game-modal h4")
let currentPlayer = "X";
let arr = Array(9).fill(null);

const checkWinner = () =>{
    if(
        (arr[0] !== null && arr[0]==arr[1] && arr[1]==arr[2]) ||
        (arr[3] !== null && arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6] !== null && arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0] !== null  && arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[1] !== null && arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2] !== null && arr[2]==arr[5] && arr[5]==arr[8]) ||
        (arr[0] !== null && arr[0]==arr[4] && arr[4]==arr[8]) ||
        (arr[2] !== null && arr[2]==arr[4] && arr[4]==arr[6])
    ){
        // document.write(`Winner is ${currentPlayer}`);
        //document.write(`Restart the game`)
        heading.innerText = `Winner is ${currentPlayer}`
        gameModal.classList.add("show");
        return;
    }
    if(!arr.some(e => e===null)){
        heading.innerText = `Draw!!!`
        gameModal.classList.add("show");
        return;
    }
}

const playAgain = () =>{
    location.reload();
}
const handleClick = (el) =>{
    const id = Number(el.id);
    if(arr[id] !==null) return;
    el.innerText = currentPlayer;
    arr[id] = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "0" :"X";
   
}