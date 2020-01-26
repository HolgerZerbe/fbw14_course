module.exports = (string1, string2) => {
    let a = parseInt(string1);
    let b = parseInt(string2);

    if (a >b ) {
        let helper = a;
        a = b;
        b = helper;
    }

    for (let i = a; i<=b; i++) {
        if (i%2) {
            console.log(i+" ist ungerade")
        }else {
            console.log(i+" ist gerade")
        }
    }

}