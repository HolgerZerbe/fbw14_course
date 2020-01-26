console.log("37_Conditional_Rendering");

const btnHomeObj = document.getElementById('BtnHome');
const btnInfoObj = document.getElementById('BtnInfo');
const btnImpressumObj = document.getElementById('BtnImpressum');

const homeObj = document.getElementById('home');
const infoObj = document.getElementById('info');
const impressumObj = document.getElementById('impressum');

const headerObj = document.getElementsByClassName(`header`);

btnHomeObj.onclick = function() {
    impressumObj.style.display= `none`;
    homeObj.style.display= `block`;
    infoObj.style.display= `none`;
    btnFAQObj.style.display=`none`;

}
btnInfoObj.onclick = function() {
    impressumObj.style.display= `none`;
    homeObj.style.display= `none`;
    infoObj.style.display= `block`;
    btnFAQObj.style.display=`none`;

}
btnImpressumObj.onclick = function() {
    impressumObj.style.display= `block`;
    homeObj.style.display= `none`;
    infoObj.style.display= `none`;
    btnFAQObj.style.display=`none`;

}

const btnFAQObj = document.createElement(`span`);
btnFAQObj.innerText="FAQ";

btnFAQObj.onclick = function() {
    btnFAQObj.style.display=`block`;
    impressumObj.style.display= `none`;
    homeObj.style.display= `none`;
    infoObj.style.display= `none`;

}

headerObj[0].appendChild(btnFAQObj);
