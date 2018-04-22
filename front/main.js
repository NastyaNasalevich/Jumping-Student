let cancelButton = document.getElementById('cancel');
cancelButton.disabled = true;
let jumpButtons = document.getElementsByClassName('jump');
   for (let i = 0; i < jumpButtons.length; i++) {
   		jumpButtons[i].disabled = i==0 || i==2;
}

let cells = document.getElementsByClassName('cell');

let addButton = document.getElementById('add');
addButton.addEventListener('click', function () {
    let newCell = document.createElement('div');
    newCell.classList.add('cell');
    document.getElementById('road').appendChild(newCell);
    newCell.onclick = addHillock;

    setButtonsDisableState();    
});

function addHillock() {
    this.classList.toggle("hillock");

    setButtonsDisableState();
};

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function () {    
    let deleteCell = cells[cells.length - 1]    
    deleteCell.parentNode.removeChild(deleteCell);

    setButtonsDisableState();
});

for (let i = 0; i < jumpButtons.length; i++) {
    jumpButtons[i].onclick = makeJump;
}

let arrStep = [];
let currentPosition = 0;
let previousStep = 0;
function makeJump() {
    let dataNumber = this.getAttribute('data-number');
    let stepOffset = parseInt(dataNumber);
    let stepSize = stepOffset + previousStep + 1;   
    let newPosition = stepSize + currentPosition;    

    // сохраняем предыдущую позицию студента
    arrStep.push(currentPosition);    

    // убираем иконку студента с предыдущей позиции и ставим на новую
    cells[currentPosition].classList.toggle("student");    
    cells[newPosition].classList.toggle("student");

    previousStep = newPosition - currentPosition - 1;

    // обновляем позицию
    currentPosition = newPosition;

    updateStepButtonsLabels();        
    setButtonsDisableState();
}

function updateStepButtonsLabels() {
    for (let i = 0; i < jumpButtons.length; i++) {
        jumpButtons[i].innerText = 'Make ' + (previousStep + i) + ' jump';
    }
}

cancelButton.addEventListener('click', function () {           
    let previousPosition = arrStep.pop();    
    cells[currentPosition].classList.toggle("student");
    cells[previousPosition].classList.toggle("student");
    currentPosition = previousPosition;   

    updateStepButtonsLabels(currentPosition);    
    setButtonsDisableState();     
});

function setButtonsDisableState() {
    cancelButton.disabled = arrStep.length === 0;
    let lastCell = cells[cells.length - 1];    
    deleteButton.disabled = lastCell.classList.contains('student');
    for (let i = 0; i < jumpButtons.length; i++) {
   		jumpButtons[i].disabled = ((currentPosition + previousStep + i) > (cells.length - 1)) || (previousStep + i)<1 || (i==2 && arrStep.length==0);
	}
}