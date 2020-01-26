let tableObj = document.createElement(`table`);
let tablerowObj = document.createElement(`tr`);

document.body.append(tableObj);

tableObj.append(tablerowObj);

tablerowObj.innerHTML=`<td>Name</td><td>ID</td>`;

tablerowObj.classList.add(`tablerow`);