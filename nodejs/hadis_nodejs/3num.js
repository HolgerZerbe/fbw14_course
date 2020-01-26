module.exports = (number) => {
    numberArr = number[0].split(``);

    if (numberArr.length ===3 && parseInt(numberArr[0])>=0 && parseInt(numberArr[0])<=9 && parseInt(numberArr[1])>=0 && parseInt(numberArr[1])<=9 && parseInt(numberArr[2])>=0 && parseInt(numberArr[2])<=9){
    console.log("Du bist cool!");
    }
}