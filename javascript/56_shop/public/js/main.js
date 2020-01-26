const allBtnObj = document.getElementById(`allBtn`);
const bookBtnObj = document.getElementById(`bookBtn`);
const movieBtnObj = document.getElementById(`movieBtn`);
const musicBtnObj = document.getElementById(`musicBtn`);
const cartBtnObj = document.getElementById(`cartBtn`);
const buyNowBtnObj = document.getElementsByClassName(`buyNowBtn`)[0];

const mainObj = document.getElementsByClassName(`main`)[0];
const productObJ = document.getElementsByClassName(`product`)[0];
const thxForPurchaseObj = document.getElementsByClassName(`thxForPurchase`)[0];
const cartObj = document.getElementsByClassName(`cart`)[0];

allBtnObj.onclick = () => {
    mainObj.style.display = "flex";
    cartObj.style.display = "none";
    thxForPurchaseObj.style.display="none";
    allBtnObj.classList.add("active");
    bookBtnObj.classList.remove("active");
    movieBtnObj.classList.remove("active");
    musicBtnObj.classList.remove("active");
    cartBtnObj.classList.remove("active");
}
bookBtnObj.onclick = () => {
    mainObj.style.display = "flex";
    cartObj.style.display = "none"; 
    thxForPurchaseObj.style.display="none";
    allBtnObj.classList.remove("active");
    bookBtnObj.classList.add("active");
    movieBtnObj.classList.remove("active");
    musicBtnObj.classList.remove("active");
    cartBtnObj.classList.remove("active");
}
movieBtnObj.onclick = () => {
    mainObj.style.display = "flex";
    cartObj.style.display = "none";
    thxForPurchaseObj.style.display="none";
    allBtnObj.classList.remove("active");
    bookBtnObj.classList.remove("active");
    movieBtnObj.classList.add("active");
    musicBtnObj.classList.remove("active");
    cartBtnObj.classList.remove("active");
}
musicBtnObj.onclick = () => {
    mainObj.style.display = "flex";
    cartObj.style.display = "none";
    thxForPurchaseObj.style.display="none";
    allBtnObj.classList.remove("active");
    bookBtnObj.classList.remove("active");
    movieBtnObj.classList.remove("active");
    musicBtnObj.classList.add("active");
    cartBtnObj.classList.remove("active");
}
cartBtnObj.onclick = () => {
    mainObj.style.display = "none";
    cartObj.style.display = "block";
    thxForPurchaseObj.style.display="none";
    allBtnObj.classList.remove("active");
    bookBtnObj.classList.remove("active");
    movieBtnObj.classList.remove("active");
    musicBtnObj.classList.remove("active");
    cartBtnObj.classList.add("active");
}

buyNowBtnObj.onclick = () => {
    mainObj.style.display = "none";
    cartObj.style.display = "none";
    thxForPurchaseObj.style.display="block";  
    allBtnObj.classList.remove("active");
    bookBtnObj.classList.remove("active");
    movieBtnObj.classList.remove("active");
    musicBtnObj.classList.remove("active");
    cartBtnObj.classList.remove("active");
}