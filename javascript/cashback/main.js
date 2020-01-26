function checkCashRegister(price, cash, cid) {

    var result = {
        status: "OPEN",
        change: []
    }
    var unitKind, cidValue;
    var giveback = cash - price;

    for (var i = 0; i = cid[length - 1]; i++) {
        cidValue += cid[i][1];
    }


    if (giveback > cidValue) {
        result.status = 'closed';
        result.change = cid;
        return result;
    }


    for (var i = (cid.length - 1); i >= 0; i--) {
        if (i === 8) {
            unitKind = 100;
        };
        if (i === 7) {
            unitKind = 20;
        };
        if (i === 6) {
            unitKind = 10;
        };
        if (i === 5) {
            unitKind = 5;
        };
        if (i === 4) {
            unitKind = 1;
        };
        if (i === 3) {
            unitKind = 0.25;
        };
        if (i === 2) {
            unitKind = 0.1;
        };
        if (i === 1) {
            unitKind = 0.05;
        };
        if (i === 0) {
            unitKind = 0.01;

        };
        //console.log(`i = ` + i);
        //console.log(teiler);
        var helper = 0,
            helperToPush = [],
            howManyUnits = Math.floor(cid[i][1] / unitKind);
        //console.log(`howManyUnits = `+howManyUnits)

        if (i === 0) {
            for (var j = howManyUnits; j >= 0; j--) {

                if (unitKind <= giveback) {
                    //console.log(`j = ` + j);
                    helper += 1;
                    giveback -= unitKind;
                    //console.log(`unitKind = ` + unitKind);
                    //console.log(`helper = ` + helper);
                    //console.log('giveback = ' + giveback);
                }
            }
        } else

            for (var j = howManyUnits; j > 0; j--) {

                if (unitKind <= giveback) {
                    //console.log(`j = ` + j);
                    helper += 1;
                    giveback -= unitKind;
                    //console.log(`unitKind = ` + unitKind);
                    //console.log(`helper = ` + helper);
                    //console.log('giveback = ' + giveback);
                }
            }

        if (helper > 0) {
            helperToPush = [cid[i][0], (helper * unitKind)];
            result.change.push(helperToPush);
        }
        helper = 0;
    }

    if (giveback === cidValue) {
        result.status = 'CLOSED';
    }
    if (giveback > 0.01) {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
    }

    return result;

}
var wechselgeld = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(wechselgeld);

var wechselgeld2 = checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

console.log(wechselgeld2);

var wechselgeld3 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);



console.log(wechselgeld3);

var wechselgeld4 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

console.log(wechselgeld4)

var wechselgeld5 = checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

console.log(wechselgeld5)