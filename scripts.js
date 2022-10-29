const container = document.querySelector('#container');
const xLarge = document.querySelector('#xlarge');
const large = document.querySelector('#large');
const medium = document.querySelector('#medium');
const small = document.querySelector('#small');
const custom = document.querySelector('#custom');
const clear = document.querySelector('#newGrid');
const white = document.querySelector('#white');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const green= document.querySelector('#green');
const erase = document.querySelector('#erase');

let num = 16;
let backgroundColor = 'white';


function createGrid(){
    
    const contWidth = 600;
    let divSide = contWidth / num;
    

    for(let i=0; i<(num * num); i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'divs');
        div.style.height = `${divSide}px`;
        div.style.width = `${divSide}px`;

        container.appendChild(div);

        div.addEventListener('mouseover', (e)=>{
            e.target.style.background = backgroundColor;
        })
    }
}

createGrid()

function rmvGrid(){
    let containerDivs = container.querySelectorAll('div');
    containerDivs = Array.from(containerDivs);
    containerDivs.forEach(div => {
        container.removeChild(div);
    })
}

function clearGrid(){
    rmvGrid();
    createGrid();
}


small.addEventListener('click', () => {
    rmvGrid();
    num = 100;
    createGrid();
})
    
medium.addEventListener('click', () => {
rmvGrid();
num = 64;
createGrid();
})

large.addEventListener('click', () => {
rmvGrid();
num = 32;
createGrid();
})

xLarge.addEventListener('click', () => {
    rmvGrid();
    num = 16;
    createGrid();
})

clear.addEventListener('click', () => {
    clearGrid();
})

yellow.addEventListener('click', () =>{
    backgroundColor = 'yellow';
})

white.addEventListener('click', () =>{
    backgroundColor = 'white';
})

green.addEventListener('click', () =>{
    backgroundColor = 'green';
})

red.addEventListener('click', () =>{
    backgroundColor = 'red';
})

erase.addEventListener('click', () =>{
    backgroundColor = 'rgb(34, 31, 31)';
})







