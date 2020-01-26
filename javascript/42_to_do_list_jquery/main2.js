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





$(document).ready(function () {


    $(`#createTask`).click(function (event) {
        event.preventDefault();
    
        if ($(`#createTaskInput`).val !== ``) {
            const newLiObj = $('<li class="listitemStyle"><span class="colorWhite">'+$(`#createTaskInput`).val()+'</li>');
            $("#todolist").append(newLiObj);
            $('<button class="btnRight">X</button').insertAfter(".listitemStyle").last();
            

             //   $( "<p>Test</p>" ).insertAfter( ".inner" );

            //newLiObj.HTML(`<span class="colorWhite">${$(this).val}<button class="btnRight">x</button>`);



           
        //     const newLiObj = document.createElement(`li`);
        //     newLiObj.innerHTML = `<span class="colorWhite">${$(this).val}<button class="btnRight">x</button>`;
        //     newLiObj.classList.add(`listitemStyle`);
        //     todolistObj.append(newLiObj);
        //     createTaskInputObj.value = "";

        // }
        // const btnRightObj = document.getElementsByClassName(`btnRight`);

        // for (let i = 0; i < btnRightObj.length; i++) {
        //     btnRightObj[i].onclick = function () {
        //         this.parentElement.parentElement.remove();
            }
        
    })
})