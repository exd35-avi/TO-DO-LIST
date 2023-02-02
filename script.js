const title = document.getElementById('title');
const description = document.getElementById('description');

const form = document.querySelector('form');
const container = document.querySelector('.container');

const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

showAllTasks();
console.log(tasks);

function showAllTasks() {
    tasks.forEach((value,index)=>{
        const div = document.createElement('div');
        div.setAttribute('class','task');
        
        const innerdiv = document.createElement('div');
        div.append(innerdiv);

        const p = document.createElement('p');
        p.innerText = value.title;
        innerdiv.append(p);

        const span = document.createElement('span');
        span.innerText = value.description;
        innerdiv.append(span);

        const delet = document.createElement('button');
        delet.setAttribute('class','delete');
        delet.innerText = '-';

        div.append(delet);

        delet.addEventListener('click',()=>{
            deleteTask(index);
        });

        container.append(div);
    });
}

function deleteTask(index) {
    removeTasks();

    tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    showAllTasks();
    console.log(tasks);
}

function removeTasks() {
    tasks.forEach((value,index)=>{
        const div = document.querySelector('.task');
        div.remove();
    });
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    removeTasks();

    tasks.push({
        title: title.value,
        description: description.value
    });
    
    localStorage.setItem('tasks',JSON.stringify(tasks));

    console.log(tasks);
    showAllTasks();
});