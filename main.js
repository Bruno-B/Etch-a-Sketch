
const mainDiv = document.querySelector('#main');
const reset = document.querySelector('#reset');

reset.addEventListener('click',newGrid);

createGrid(16);



    function changeColor(e){
        console.log(e);
        console.log(this.getAttribute('width'));
        this.style.backgroundColor = `${random_rgba()}`;
        
    }

    function random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }


function newGrid(){
    deleteGrid();

    let number = prompt(`How many squares?`);
    if(number < 1 || number >100){
        do{
            number = prompt('Invalid number of squares!');
        }while(number < 1 || number >100);
    }
    createGrid(number);
    
}

function deleteGrid(){
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
      }
}


function createGrid(n){
    for(let i = 0 ; i<n;i++){
        for(let j = 0 ; j<n ; j++){
    
            const div = document.createElement('div');
            let percentage = 100/n;
            div.style.width = `${percentage}%`;
            div.style.height = `${percentage}%`;
            mainDiv.appendChild(div);
            div.addEventListener('mouseover',changeColor);
    
        }
    }
}