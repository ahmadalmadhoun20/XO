let title = document.querySelector(".title");

let turn = "X";

let squares = [];

function endGame(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById(`item${num1}`).style.backgroundColor = "#370686";
    document.getElementById(`item${num2}`).style.backgroundColor = "#370686";
    document.getElementById(`item${num3}`).style.backgroundColor = "#370686";

    setInterval(() => { title.innerHTML += "."; }, 1000);
    setTimeout(() => { location.reload(); }, 4000);
}

function winner() {
    for(let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML;
    }
    
    // Rows
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !== "") { // && squares[1] !== "" => حط اي رقم عادي
        endGame(1, 2, 3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !== "") { // && squares[4] !== "" => حط اي رقم عادي
        endGame(4, 5, 6);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !== "") { // && squares[7] !== "" => حط اي رقم عادي
        endGame(7, 8, 9);
    }
    // column
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !== "") { // && squares[1] !== "" => حط اي رقم عادي
        endGame(1, 4, 7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] !== "") { // && squares[2] !== "" => حط اي رقم عادي
        endGame(2, 5, 8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !== "") { // && squares[3] !== "" => حط اي رقم عادي
        endGame(3, 6, 9);
    }
    // Cross
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !== "") { // && squares[1] !== "" => حط اي رقم عادي
        endGame(1, 5, 9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] !== "") { // && squares[3] !== "" => حط اي رقم عادي
        endGame(3, 5, 7);
    }

}

function game(id) {
    let element = document.getElementById(id);

    if(turn === "X" && element.innerHTML == "") {
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = turn;
    }
    else if(turn === "O" && element.innerHTML == "") {
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = turn;
    }
    winner();
}