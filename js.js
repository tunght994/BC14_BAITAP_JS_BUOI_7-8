document.getElementById("btnAdd").addEventListener("click", addNumbers);

document.getElementById("btnSum").addEventListener("click", sum);

document.getElementById("btnCount").addEventListener("click", count);

document.getElementById("btnMin").addEventListener("click", minNumber);

document.getElementById("btnPos").addEventListener("click", numMin);

document.getElementById("btnEven").addEventListener("click", evenNumber);

document.getElementById("btnExNum").addEventListener("click", numberExchange);

document.getElementById("btnIncrease").addEventListener("click", sortIncrease);

document.getElementById("btnPrime").addEventListener("click", sortPrime);

document.getElementById("btnInteger").addEventListener("click", sortInteger);

document.getElementById("btnCompare").addEventListener("click", resultCompare);


const arrayDiv = document.getElementById("arrayDiv");
const numberArr = [];

function addNumbers() {
    const numberPositive = parseInt(document.getElementById("numberAdd").value);
    
    numberArr.push(numberPositive);
    document.getElementById("numberAdd").value = " ";

    renderArr();
}

function renderArr() {
    arrayDiv.innerHTML = numberArr.map(function (numItem) {
        return `<span>${numItem}</span>`
    }).join(' , ' );
}

function sum() {
    const arrSum = document.getElementById("arrSum");
    var result = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] >= 0) {
            result = result + numberArr[i];
        }
    }
    console.log(result);

    arrSum.innerText = "Tổng số dương là: " + result;
}

function count() {
    const arrCount = document.getElementById("arrCount");
    var positiveNum = 0;
    var negativeNum = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < 0) {
            negativeNum = negativeNum + 1;
        } else {
            positiveNum = positiveNum + 1;
        }
    }
    console.log("Negative: ", negativeNum, "Positive: ", positiveNum);

    arrCount.innerText = "Số âm: " + negativeNum + " " + "Số dương: " + positiveNum;

    var compareNum = document.getElementById("compareNum");

    if (positiveNum > negativeNum) {
        console.log("Số dương lớn hơn số âm");
        compareNum.innerText = "Số dương lớn hơn số âm";
    } else if (positiveNum < negativeNum) {
        console.log("Số âm lớn hơn số dương");
        compareNum.innerText = "Số âm lớn hơn số dương"
    } else {
        console.log("Số âm bằng số dương");
        compareNum.innerText = "Số âm bằng số dương"
    }
}

function minNumber() {
    const arrMin = document.getElementById("arrMin");
    var min = Math.min.apply(Math, numberArr);

    console.log(min);

    arrMin.innerText ="Số nhỏ nhất là: " + min;
}

function numMin() {
    const posMin = document.getElementById("posMin");
    var newArr = numberArr.filter(function (value, index) {
        if (value >= 0) {
            return true;
        }   return false;
    })
    var minNum = newArr[0];
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0 && newArr[i] < minNum) {
            minNum = newArr[i];
        }
    }
    console.log(minNum);

    posMin.innerText ="Số dương nhỏ nhất là: " + minNum;    
}

function evenNumber() {
    const posEven = document.getElementById("posEven");
    var numEven = -1;

    for ( var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] % 2 === 0) {
            numEven = numberArr[i];  
        }
    }

    if ( numEven !== -1) {
        posEven.innerText ="Số chẵn cuối cùng trong mảng là: " + numEven;
    } else {
        posEven.innerText ="Mảng không tìm được số chẵn: "  + numEven; 
    }      
}

function numberExchange() {
    const exchangeNumber = document.getElementById("exchangeNumber");
    const indexFirst = parseInt(document.getElementById("ipIndex1").value);
    const indexSecond = parseInt(document.getElementById("ipIndex2").value);
    var tempo = numberArr[indexFirst];
    numberArr[indexFirst] = numberArr[indexSecond];
    numberArr[indexSecond] = tempo;

    exchangeNumber.innerText = numberArr;
}

function sortIncrease() {
    const sortIncrease = document.getElementById("sortIncrease");
    numberArr.sort(function (a,b) {
        return a - b;
    }) 
    sortIncrease.innerText = numberArr;
}

function sortPrime() {
    const primeNum = document.getElementById("primeNum");

    for ( var i = 0; i < numberArr.length; i++) {
        if (checkInteger(numberArr[i])) {
            console.log(numberArr[i]);

            primeNum.innerText = "Số nguyên tố đầu tiên trong mảng là: " + numberArr[i]; 

            return; 
        }
         
    }
    console.log("Không có số nguyên tố");

    primeNum.innerText = "Không có số nguyên tố: " + -1;  
}

function checkInteger(n) {
    if (n < 2) {
        return false;
    } else {
        for ( var i = 2; i <= Math.sqrt(n); i++) {
            if ( n % i == 0) {
                return false;
            }
        }
    }
    return true;
}


const integerNum = document.getElementById("integerNum");
const printInteger = document.getElementById("printInteger");
const realArr = [];

function sortInteger() {
    const addInteger = parseFloat(document.getElementById("addInteger").value);

    realArr.push(addInteger);
    document.getElementById("addInteger").value = " ";

    addRealArr();

    var countInte = 0;
    for (var i = 0; i < realArr.length; i++ ) {
        if (IsInt(realArr[i])) {
            countInte ++;
        }    
    }
    printInteger.innerText = "Số nguyên trong mảng là: " + countInte;     
}

function addRealArr() {
    integerNum.innerHTML = realArr.map(function (newItem) {
        return `<span>${newItem}</span>`
    }).join(',');
}

function IsInt(n) {
    return n % 1 === 0;
}

function resultCompare() {
    const compareResult = document.getElementById("compareResult");
    var integerPositive = 0;
    var integerNegative = 0;

    for (var i = 0; i < realArr.length; i++) {
        if (realArr[i] < 0) {
            integerNegative = integerNegative + 1;
        } else {
            integerPositive = integerPositive + 1;
        }
    }
    console.log("Negative: ", integerNegative, "Positive: ", integerPositive);

    compareResult.innerText = "Số âm: " + integerNegative + " " + "Số dương: " + integerPositive;

    var printCompare = document.getElementById("printCompare");

    if (integerPositive > integerNegative) {
        console.log("Số dương lớn hơn số âm");
        printCompare.innerText = "Số dương lớn hơn số âm";
    } else if (integerPositive < integerNegative) {
        console.log("Số âm lớn hơn số dương");
        printCompare.innerText = "Số âm lớn hơn số dương"
    } else {
        console.log("Số âm bằng số dương");
        printCompare.innerText = "Số âm bằng số dương"
    }

}
