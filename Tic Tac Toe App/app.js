const para = document.querySelector('.para');
const cells = document.querySelectorAll('.cell');
const restart_btn = document.querySelector('.restart-btn');
const reset_btn = document.querySelector('.reset-btn');
let turn0 = true;

const winningPattens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turn0 = true;
    para.innerHTML = "Player O Turn"
    cells.forEach((cell) => {
        cell.disabled = false;
        cell.innerHTML = '';
    })
    reset_btn.style.display = 'block';
    restart_btn.style.display = 'none';
}


reset_btn.addEventListener('click', resetGame);
restart_btn.addEventListener('click', resetGame);


cells.forEach((cell) => {

    cell.addEventListener('click', () => {

        if (turn0) {
            cell.innerHTML = 'O';
            para.innerHTML = `Player X Turn`;
            turn0 = false;
        } else {
            cell.innerHTML = 'X';
            para.innerHTML = `Player O Turn`;
            turn0 = true;
        }
        cell.disabled = true;
        checkWinner()
    })

}
)

const checkWinner = () => {

    for (let pattern of winningPattens) {

        let value1 = cells[pattern[0]].innerText;
        let value2 = cells[pattern[1]].innerText;
        let value3 = cells[pattern[2]].innerText;

        if (value1 != '' && value2 != '' && value3 != '') {
            if (value1 === value2 && value2 === value3) {

                para.innerHTML = `Congratulation, winner is ${value1}`;

                cells.forEach((cell) => {
                    cell.disabled = true
                })

                reset_btn.style.display = 'none';
                restart_btn.style.display = 'block';

            }
        }
    }
}

