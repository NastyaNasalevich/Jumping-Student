var cell = document.getElementsByClassName('cell');

var pressAdd = document.getElementById('add');
pressAdd.addEventListener('click', function () {
    var addCell = document.createElement('div');
    addCell.classList.add('cell');
    document.getElementById('road').appendChild(addCell);
    addCell.onclick = addHillock;
    });

function addHillock(){
    this.classList.toggle("hillock");
    };

var pressDel = document.getElementById('delete');
pressDel.addEventListener('click', function () {
    deliteCell = document.getElementsByClassName('cell')[cell.length-1];
    deliteCell.parentNode.removeChild(deliteCell);
    });

var jump = document.getElementsByClassName('jump');
    for(var i = 0; i < jump.length; i++){
    jump[i].onclick = makeJump;
    }   

var arrStep=[0];
var number, previousStep;
function makeJump(){
    if (arrStep.length==1){
        number=1;
        previousStep=0;}
     else {
        var dataNumber=this.getAttribute('data-number');
        number=parseInt(dataNumber);
        previousStep=arrStep[arrStep.length-1]-arrStep[arrStep.length-2];
        }
    var newPosition=arrStep[arrStep.length-1]+previousStep+number;
        arrStep.push(newPosition);
        updateButton(previousStep);
    cell[arrStep[arrStep.length-2]].classList.toggle("student");
    cell[arrStep[arrStep.length-1]].classList.toggle("student"); 
} 

function updateButton(previousStep){
var reducedJump = document.getElementsByClassName('jump')[0];
    reducedJump.innerText='Make '+(previousStep-1)+' jump';
var sameJump = document.getElementsByClassName('jump')[1];
    sameJump.innerText='Make '+(previousStep)+' jump';
var increasedJump = document.getElementsByClassName('jump')[2];
    increasedJump.innerText='Make '+(previousStep+1)+' jump';
}

var pressCancel = document.getElementsByClassName('cancel')[0];
    pressCancel.onclick= cancelJump;  

function cancelJump (){
    var cell = document.getElementsByClassName('cell');
    cell[arrStep[arrStep.length-1]].classList.toggle("student"); 
    cell[arrStep[arrStep.length-2]].classList.toggle("student");
}