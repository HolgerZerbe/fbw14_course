// module.exports = (number) => {
//     let a = parseInt(number)
//     let str = "";
//     for (let i = 0; i<a; i++) {
//             str +="T";
//             console.log(str)
//     }
// }

module.exports = (number) => {
    let a = parseInt(number)

    for (let i = 0; i<a; i++) {
        for (let j = i; j<=i; j++)
            console.log("T".repeat(j+1))
    }
}