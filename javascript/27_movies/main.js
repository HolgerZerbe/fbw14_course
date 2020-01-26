const li1Obj = document.getElementById(`li1`);
const li2Obj = document.getElementById(`li2`);
const li3Obj = document.getElementById(`li3`);
const li4Obj = document.getElementById(`li4`);
const li5Obj = document.getElementById(`li5`);

const rocky1Obj = document.getElementById(`rocky1`);
const rocky2Obj = document.getElementById(`rocky2`);
const rocky3Obj = document.getElementById(`rocky3`);
const rocky4Obj = document.getElementById(`rocky4`);
const rocky5Obj = document.getElementById(`rocky5`);

li1Obj.onclick = function (){
    li1Obj.classList.add(`active`);
    li2Obj.classList.remove(`active`);
    li3Obj.classList.remove(`active`);
    li4Obj.classList.remove(`active`);
    li5Obj.classList.remove(`active`);
    rocky1Obj.style.display = 'block';
    rocky2Obj.style.display = `none`;
    rocky3Obj.style.display = `none`;
    rocky4Obj.style.display = `none`;
    rocky5Obj.style.display = `none`;
}

li2Obj.onclick = function (){
    li1Obj.classList.remove(`active`);
    li2Obj.classList.add(`active`);
    li3Obj.classList.remove(`active`);
    li4Obj.classList.remove(`active`);
    li5Obj.classList.remove(`active`);
    rocky1Obj.style.display = `none`;
    rocky2Obj.style.display = 'block';
    rocky3Obj.style.display = `none`;
    rocky4Obj.style.display = `none`;
    rocky5Obj.style.display = `none`;
}

li3Obj.onclick = function (){
    li3Obj.classList.add(`active`);
    li1Obj.classList.remove(`active`);
    li2Obj.classList.remove(`active`);
    li4Obj.classList.remove(`active`);
    li5Obj.classList.remove(`active`);
    rocky3Obj.style.display = 'block';
    rocky1Obj.style.display = `none`;
    rocky2Obj.style.display = `none`;
    rocky4Obj.style.display = `none`;
    rocky5Obj.style.display = `none`;
}

li4Obj.onclick = function (){
    li4Obj.classList.add(`active`);
    li1Obj.classList.remove(`active`);
    li2Obj.classList.remove(`active`);
    li3Obj.classList.remove(`active`);
    li5Obj.classList.remove(`active`);
    rocky4Obj.style.display = 'block';
    rocky1Obj.style.display = `none`;
    rocky2Obj.style.display = `none`;
    rocky3Obj.style.display = `none`;
    rocky5Obj.style.display = `none`;
}

li5Obj.onclick = function (){
    li5Obj.classList.add(`active`);
    li1Obj.classList.remove(`active`);
    li2Obj.classList.remove(`active`);
    li3Obj.classList.remove(`active`);
    li4Obj.classList.remove(`active`);
    rocky5Obj.style.display = 'block';
    rocky1Obj.style.display = `none`;
    rocky2Obj.style.display = `none`;
    rocky3Obj.style.display = `none`;
    rocky4Obj.style.display = `none`;
}