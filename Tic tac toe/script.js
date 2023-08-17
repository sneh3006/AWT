const fail=new Audio('./Audio/8-bit-video-game-fail-version-2-145478.mp3')
const turn_music = new Audio('./Audio/sfx_jump_07-80241.mp3');
const win=new Audio('./Audio/winsquare-6993.mp3');

turn='X';

//Fuction to Change Turn 

const changeTurn= () => { 
    return turn==='X'?'O':'X';
}

//Fuction to Check win

const checkWin = () =>{

}

//Game logic

let cell = document.getElementsByClassName('cell');
Array.from(cell).forEach(element =>{
    let move= document.querySelector('.move');
    cell.addEventListener('click',()=>{
        if(move.innerText ===''){
            move.innerText=turn;
            changeTurn();
            turn_music.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText = `Turn for :${turn}`
        }
    })
})


 
 