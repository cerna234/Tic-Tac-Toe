let gameboard = [[null,null,null],[null,null,null],[null,null,null]]
console.log(gameboard);

let color = 'orange';



function row1Win(){
        document.getElementById("one").style.backgroundColor = color;
        document.getElementById("two").style.backgroundColor = color;
        document.getElementById("three").style.backgroundColor = color;
}
function row2Win(){
        document.getElementById("four").style.backgroundColor = color;
        document.getElementById("five").style.backgroundColor = color;
        document.getElementById("six").style.backgroundColor = color;
}
function row3Win(){
        document.getElementById("seven").style.backgroundColor = color;
        document.getElementById("eight").style.backgroundColor = color;
        document.getElementById("nine").style.backgroundColor = color;
}

function vert1Win(){
        document.getElementById("one").style.backgroundColor = color;
        document.getElementById("four").style.backgroundColor = color;
        document.getElementById("seven").style.backgroundColor = color;
}

function vert2Win(){
        document.getElementById("two").style.backgroundColor = color;
        document.getElementById("five").style.backgroundColor = color;
        document.getElementById("eight").style.backgroundColor = color;
}
function vert3Win(){
        document.getElementById("three").style.backgroundColor = color;
        document.getElementById("six").style.backgroundColor = color;
        document.getElementById("nine").style.backgroundColor = color;
}

function acrossLeft(){
    document.getElementById("one").style.backgroundColor = color;
    document.getElementById("five").style.backgroundColor = color;
    document.getElementById("nine").style.backgroundColor = color;
}

function acrossRight(){
    document.getElementById("three").style.backgroundColor = color;
    document.getElementById("five").style.backgroundColor = color;
    document.getElementById("seven").style.backgroundColor = color;
}





let xWinner = 'x';

let p1Score = 0;
function game(){



function XwinnerCheck(){
    if(gameboard[0][0] == xWinner && gameboard[0][1] === xWinner && gameboard[0][2] === xWinner){
        console.log("x wins");
        row1Win(); //across first row
        p1Score = p1Score+1;
        xWinner = 'done'; // stops game once player has won
        console.log("//across first row")
        console.log(p1Score);

    
        
    }
    if(gameboard[1][0] === xWinner && gameboard[1][1] === xWinner && gameboard[1][2] === xWinner){
        console.log("x wins");
        row2Win(); //across second row
        p1Score = p1Score+1;
        xWinner = 'done';
        console.log("//across row 2")
        console.log(p1Score);
    }
    if(gameboard[2][0] ==='x' && gameboard[2][1] ==='x' && gameboard[2][2] === 'x'){
        console.log("x wins");
        row3Win(); //across third row
        gameOver = true;
        console.log("//across  row 3")
        
        
    }
    if(gameboard[0][0] ==='x' && gameboard[1][0] ==='x' && gameboard[2][0] === 'x'){
        console.log("x wins");
        vert1Win(); //vertical first row
        gameOver = true;
        
    }
    if(gameboard[0][1] ==='x' && gameboard[1][1] ==='x' && gameboard[2][1] === 'x'){
        console.log("x wins");
        vert2Win();  //vertical second row
        gameOver = true;
       
    }
    if(gameboard[0][2] ==='x' && gameboard[1][2] ==='x' && gameboard[2][2] === 'x'){
        console.log("x wins");
        vert3Win();  //vertical third row
        gameOver = true;
    }
     if(gameboard[0][0] ==='x' && gameboard[1][1] ==='x' && gameboard[2][2] === 'x'){
        console.log("x wins");
        acrossLeft(); //across from left
        gameOver = true;
    }
     if(gameboard[0][2] ==='x' && gameboard[1][1] ==='x' && gameboard[2][0] === 'x'){
        console.log("x wins");
        acrossRight(); //across from right
        gameOver = true;
    }
}



function owinnerCheck(){
    if(gameboard[0][0] ==='o' && gameboard[0][1] ==='o' && gameboard[0][2] === 'o'){
        console.log("o wins");
        row1Win();  //across first row
    
    }
     if(gameboard[1][0] ==='o' && gameboard[1][1] ==='o' && gameboard[1][2] === 'o'){
        console.log("o wins");
        row2Win();  //across second row

    }
    if(gameboard[2][0] ==='o' && gameboard[2][1] ==='o' && gameboard[2][2] === 'o'){
        console.log("o wins");
        row3Win(); //across third row
    }
     if(gameboard[0][0] ==='o' && gameboard[1][0] ==='o' && gameboard[2][0] === 'o'){
        console.log("o wins");
        vert1Win(); //vertical first row
    }
     if(gameboard[0][1] ==='o' && gameboard[1][1]  ==='o' && gameboard[2][1] === 'o'){
        console.log("o wins");
        vert2Win();  //vertical second row
    }
     if(gameboard[0][2] ==='o' && gameboard[1][2] ==='o' && gameboard[2][2] === 'o'){
        console.log("o wins");
        vert3Win(); //vertical third row
    }
    if(gameboard[0][0] ==='o' && gameboard[1][1] ==='o' && gameboard[2][2] === 'o'){
        console.log("o wins");
        acrossLeft(); //across from left
    }
     if(gameboard[0][2] ==='o' && gameboard[1][1] ==='o' && gameboard[2][0] === 'o'){
        console.log("o wins");
        acrossRight(); //across from right
    }
}

//inputs from gameboard
let one = document.getElementById('one');
one.oninput = function(){
    gameboard[0][0] = document.getElementById("one").value;
    XwinnerCheck();
    owinnerCheck();
}


let two = document.getElementById('two');
two.oninput = function(){
    gameboard[0][1] = document.getElementById("two").value;
    XwinnerCheck();
    owinnerCheck();
}

let three = document.getElementById('three');
three.oninput = function(){
    gameboard[0][2] = document.getElementById("three").value;
    XwinnerCheck();
    owinnerCheck();
}
let four = document.getElementById('four');
four.oninput = function(){
    gameboard[1][0] = document.getElementById("four").value;
    XwinnerCheck();
    owinnerCheck();
}

let five = document.getElementById('five');
five.oninput = function(){
    gameboard[1][1] = document.getElementById("five").value;
    XwinnerCheck();
    owinnerCheck();
}

let six = document.getElementById('six');
six.oninput = function(){
    gameboard[1][2] = document.getElementById("six").value;
    XwinnerCheck();
    owinnerCheck();
}

let seven = document.getElementById('seven');
seven.oninput = function(){
    gameboard[2][0] = document.getElementById("seven").value;
    XwinnerCheck();
    owinnerCheck();
}
    
let eight = document.getElementById('eight');
eight.oninput = function(){
    gameboard[2][1] = document.getElementById("eight").value;
    XwinnerCheck();
    owinnerCheck();
}
    
    
let nine = document.getElementById('nine');
nine.oninput = function(){
    gameboard[2][2] = document.getElementById("nine").value;
    XwinnerCheck();
    owinnerCheck();
}
}





game();


    console.log(gameboard);

function resetBoard(){
    gameboard[0][0] = document.getElementById('one').value = null;
    gameboard[0][0] = document.getElementById('one').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[0][1] =  document.getElementById('two').value = null;
    gameboard[0][1] =  document.getElementById('two').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[0][2] = document.getElementById('three').value = null;
    gameboard[0][2] = document.getElementById('three').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[1][0] = document.getElementById('four').value = null;
    gameboard[1][0] = document.getElementById('four').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[1][1] = document.getElementById('five').value = null;
    gameboard[1][1] = document.getElementById('five').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[1][2] = document.getElementById('six').value = null;
    gameboard[1][2] = document.getElementById('six').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[2][0] = document.getElementById('seven').value = null;
    gameboard[2][0] = document.getElementById('seven').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[2][1] = document.getElementById('eight').value = null;
    gameboard[2][1] = document.getElementById('eight').style.backgroundColor = "rgba(0, 0, 0, 0.014)";
    gameboard[2][2] = document.getElementById('nine').value = null;
    gameboard[2][2] = document.getElementById('nine').style.backgroundColor = "rgba(0, 0, 0, 0.014)";

    xWinner = 'x';
    //resets xWinner to x enabling game to restart
}


