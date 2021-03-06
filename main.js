var btnAdd = document.querySelector('#btnAdd')
var btnSum = document.querySelector('#btnSum')
var btnCount = document.querySelector('#btnCount')
var btnMin = document.querySelector('#btnMin')
var btnPos = document.querySelector('#btnPos')
var btnEven = document.querySelector('#btnEven')
var btnExNum = document.querySelector('#btnExNum')
var btnSort =document.querySelector('#btnSort')
var btnPrime = document.querySelector('#btnPrime')
var btnInteger = document.querySelector('#btnInteger')
var btnCompare = document.querySelector('#btnCompare')

var numberArr = []

function addArr() {
    btnAdd.onclick = function() {
        var inputArr = parseInt(document.querySelector('.numberAdd').value)
        numberArr.push(inputArr)
        document.querySelector('.numberAdd').value = ''

        var result = document.querySelector('#yourArray')
        result.innerHTML = numberArr
    }
}
addArr()
//  1. Tổng các số dương trong mảng.
function sumArr () {
    var result = document.querySelector('.result')
    btnSum.onclick = function() {
        var number = 0
        for (var i = 0; i < numberArr.length; i++) {
            if(numberArr[i] >= 0){
                number = number + numberArr[i]
            }
        }
        result.innerHTML = number
    }
}
sumArr()
// 2. Đếm có bao nhiêu số dương trong mảng.
function count () {
    var resultCount = document.querySelector('.resultCount')
     btnCount.onclick = function() {
        var count = 0
        for (var i = 0 ; i < numberArr.length ; i++) {
            if(numberArr[i] > 0){
                count++
            }
        }
        resultCount.innerHTML = count
     }
}
count()
// 3. Tìm số nhỏ nhất trong mảng.
function numberMin() {
    var resultMin = document.querySelector('.resultMin')
    btnMin.onclick = function() {
        var min = Math.min.apply(Math, numberArr);
        resultMin.innerHTML ='Số nhỏ nhất là: ' + min
    }
}
numberMin()
// 4. Tìm số dương nhỏ nhất trong mảng.
function numberPosMin() {
    var resultPosMin = document.querySelector('.resultPosMin')
    btnPos.onclick = function() { 
        var newArr = numberArr.filter(function (value) {
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

        resultPosMin.innerText ="Số dương nhỏ nhất là: " + minNum;
    }

}
numberPosMin()
// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function numberEven (){
    var resultEven = document.querySelector('.resultEven')
    btnEven.onclick = function() {
        var numEven = 0;
        for ( var i = 0; i < numberArr.length; i++) {
            if (numberArr[i] % 2 === 0) {
                numEven = numberArr[i];  
            }
        }
    
        if ( numEven !== -1) {
            resultEven.innerHTML ="Số chẵn cuối cùng trong mảng là: " + numEven;
        } else {
            resultEven.innerHTML ="Mảng không tìm được số chẵn: "  + numEven; 
        }    
    }
}
numberEven()
// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function NumberExchange () {
    var NumberExchange = document.querySelector('.resultNumberExchange')
    btnExNum.onclick = function () {
        const numberOne = parseInt(document.querySelector(".ipIndex1").value);
        const numberSecond = parseInt(document.querySelector(".ipIndex2").value);
        var tempo = numberArr[numberOne];
        numberArr[numberOne] = numberArr[numberSecond];
        numberArr[numberSecond] = tempo;

        NumberExchange.innerText = numberArr;
    }
}
NumberExchange()
// 7. Sắp xếp mảng theo thứ tự tăng dần
function numberSort () {
    var resultsort = document.querySelector('.resultsort')
    btnSort.onclick = function () {
        numberArr.sort(function(a, b) {
            return a - b
        })
        
        resultsort.innerHTML = numberArr
    }
}
numberSort ()
// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function numberPrime () {
    var resultprimeNum = document.querySelector('.resultprimeNum')
    btnPrime.onclick = function () {
        for ( var i = 0; i < numberArr.length; i++) {
            if (checkInteger(numberArr[i])) {
                resultprimeNum.innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + numberArr[i]; 
                return; 
            }
        }
        resultprimeNum.innerHTML = "Không có số nguyên tố: " + -1;  
    }
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
numberPrime()

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var integerNum = document.querySelector('.integerNum')
var printInteger = document.querySelector('.printInteger')
var doubleArr = []

function numInteger () {
    btnInteger.onclick = function() {
        var addInteger = parseFloat(document.querySelector('.addInteger').value)
        doubleArr.push(addInteger)
        document.querySelector('.addInteger').value = ''
    
        addRealArr()
    
        var countInte = 0
        for (var i = 0; i < doubleArr.length; i++ ) {
            if (IsInt(doubleArr[i])) {
                countInte ++
            }    
        }
        printInteger.innerText = 'Số nguyên trong mảng là: ' + countInte
    }
}

function addRealArr() {
    integerNum.innerHTML = doubleArr.map(function (newItem) {
        return `<span>${newItem}</span>`
    }).join(',')
}

function IsInt(n) {
    return n % 1 === 0
}
numInteger()

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function compareInteger () {
    var resultCompare = document.querySelector('.resultCompare');
    btnCompare.onclick = function () {
        var integerPositive = 0
        var integerNegative = 0
    
        for (var i = 0; i < numberArr.length; i++) {
            if (numberArr[i] < 0) {
                integerNegative = integerNegative + 1
            } else {
                integerPositive = integerPositive + 1
            }
        }
        resultCompare.innerHTML = 'Số âm: ' + integerNegative + ' ' + 'Số dương: ' + integerPositive
    
        var printCompare = document.querySelector('.printCompare');
    
        if (integerPositive > integerNegative) {
            printCompare.innerHTML = 'Số dương lớn hơn số âm'
        } else if (integerPositive < integerNegative) {
            printCompare.innerHTML = 'Số âm lớn hơn số dương'
        } else {
            printCompare.innerHTML = 'Số âm bằng số dương'
        }

    }

}
compareInteger()