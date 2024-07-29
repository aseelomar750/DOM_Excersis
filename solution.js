
// first TASK
const firstTask = task1.innerText="it has been changed by innerText method"

//Second Task
const secondTask = document.getElementById('task2');
secondTask.innerHTML = '<button type="button"created by innerHtml</button>';


//Third Task
// const thirdTask= document.getElementById('task3');
const thirdTask=document.body.style.backgroundColor="#232323"

//Fourth Task

const items = document.querySelectorAll('.item');
for (let item of items) {
    item.style.border = '3px solid black';
}


// Fifth Task

const href= document.querySelector('a');
href.setAttribute('href','https://www.springboard.com/');


//Sixth Task

const domMaster = document.getElementById('task6'); // Select the element by getElemntById
domMaster.value='DOM Master'; // set the value as DOM Master


//Seventh Task

const nclassList=document.getElementById('task7');
nclassList.classList.add('new-class');


//Eighth Task
const task8=document.getElementById('task8');
const btn=document.createElement('button');
task8.append(btn);


//Ninth Task
const task9=document.getElementById('task9');
task9.remove();
