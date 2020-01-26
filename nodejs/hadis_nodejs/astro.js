module.exports = (day, month, year) => {
    let sternzeichen = "";

    
    
    if (parseInt(day) < 10) {
        day = "0" + parseInt(day)
    }
    
    if (parseInt(month) < 10) {
        month = "0" + parseInt(month)
    }

    let date = month + day;

    if (date >= "0121" && date <= "0219") {
        sternzeichen = "Wassermann";
    } else if (date >= "0220" && date <= "0320") {
        sternzeichen = "Fische";
    } else if (date >= "0321" && date <= "0420") {
        sternzeichen = "Widder";
    } else if (date >= "0421" && date <= "0520") {
        sternzeichen = "Stier";
    } else if (date >= "0521" && date <= "0621") {
        sternzeichen = "Zwillinge";
    } else if (date >= "0622" && date <= "0722") {
        sternzeichen = "Krebs";
    } else if (date >= "0723" && date <= "0823") {
        sternzeichen = "Löwe";
    } else if (date >= "0824" && date <= "0923") {
        sternzeichen = "Jungfrau";
    } else if (date >= "0924" && date <= "1023") {
        sternzeichen = "Waage";
    } else if (date >= "1024" && date <= "1122") {
        sternzeichen = "Skorpion";
    } else if (date >= "1123" && date <= "1121") {
        sternzeichen = "Schütze";
    } else if ((date >= "1222" && date <= "1231") || (date >= "0101" && date <= "0120")) {
        sternzeichen = "Steinbock";
    }
    console.log("Dein Sternzeichen ist: " + sternzeichen);
}