const walkingObj = document.getElementById(`walking`);

let headline = "My To Do List!"
let i = 0;


setInterval(function () {

    let spanObj = document.createElement(`span`);
    spanObj.innerText = headline.charAt(i);
    //    walkingObj.insertAdjacentElement("beforeend", spanObj);
    walkingObj.append(spanObj);
    i++;
    if (i === headline.length + 10) {
        walkingObj.innerHTML = "";
        i = 0;
    }
}, 100);




const createTaskObj = document.getElementById(`createTask`);
const createTaskInputObj = document.getElementById(`createTaskInput`);
const todolistObj = document.getElementById(`todolist`);

createTaskObj.onsubmit = function (event) {
    event.preventDefault();

    if (createTaskInputObj.value !== ``) {
        const newLiObj = document.createElement(`li`);
        newLiObj.innerHTML = `<span class="colorWhite">${createTaskInputObj.value}<button class="btnRight">x</button>`;
        newLiObj.classList.add(`listitemStyle`);
        todolistObj.append(newLiObj);
        createTaskInputObj.value = "";

    }
    const btnRightObj = document.getElementsByClassName(`btnRight`);

    for (let i = 0; i < btnRightObj.length; i++) {
        btnRightObj[i].onclick = function () {
            this.parentElement.parentElement.remove();
        }
    }
}