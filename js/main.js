let turn = 'x';
var title = document.querySelector('.title')
let squares = [];

// ده الكسابن
function end(num1,num2,num3){
     title.innerHTML = `${'you'} win`;
 document.getElementById('item' +num1). style.background ='#00ff04ff';
 document.getElementById('item' +num2). style.background ='#00ff04ff';
 document.getElementById('item' +num3). style.background ='#00ff04ff';

 setInterval(function(){title.innerHTML += '.'},1000)
 setTimeout(function(){location.reload()},3000 )
}


// حالة الخسارة / التعادل
function lose(){
    title.innerHTML = `You Lose`;
    // فتح كل البوكسات باللون الأحمر
    for(let i=1; i<10; i++){
        document.getElementById('item'+i).style.background = '#ff0000';
    }
    setInterval(function(){title.innerHTML += '😭'},1000)
    setTimeout(function(){location.reload()},3000 )
}


function winnner()
{



for(let i = 1; i<10;i++)
{  
 squares[i] = document.getElementById('item' + i).innerHTML;
}

if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
{
end(1,2,3);
}
else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
    {
end(7,8,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
    {
end(1,4,7);
    }
        else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {
end(4,5,6);
    }
        else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
    {
end(2,5,8);
    }
        else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
end(3,6,9);
    }
        else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '')
    {
end(1,5,9);
    }
        else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')
    {
end(3,5,7);
    }
    else {
        // هنا الشرط لو مفيش ولا واحدة فاضية ومفيش كسبان
        if(squares.every((sq, i) => i === 0 || sq !== '')) {
            lose();
        }

    }
}

function game(id)
{
    let element = document.getElementById(id);
if(turn === 'x' && element.innerHTML == '')
{
    element.innerHTML = 'X';
    turn='o';
    title.innerHTML = 'O';
}
else if(turn === 'o' && element.innerHTML == ''){
       element.innerHTML = 'O';
    turn ='x';
    title.innerHTML = 'X'; 
}
winnner();
}