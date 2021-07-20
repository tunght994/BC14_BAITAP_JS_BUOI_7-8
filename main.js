var btnAdd = document.querySelector('#btnAdd')
var btnSum = document.querySelector('#btnSum')
var btnCount = document.querySelector('#btnCount')
var btnMin = document.querySelector('#btnMin')
var btnPos = document.querySelector('#btnPos')
var btnEven = document.querySelector('#btnEven')
var btnExNum = document.querySelector('#btnExNum')
var btnSort =document.querySelector('#btnSort')
var btnPrime = document.querySelector('#btnPrime')

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

function numberMin() {
    var resultMin = document.querySelector('.resultMin')
    btnMin.onclick = function() {
        var min = Math.min.apply(Math, numberArr);
        resultMin.innerHTML ="Số nhỏ nhất là: " + min;
    }
}
numberMin()

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

function numberSort () {
    var resultsort = document.querySelector('.resultsort')
    btnSort.onclick = function () {
        var arraySort = array.slice()
        arraySort.sort(function (a, b) {
            return a - b;
        });
        
        resultsort.innerHTML = arraySort
    }
}
numberSort ()

function numberPrime () {
    var resultprimeNum = document.querySelector('.resultprimeNum')
    btnPrime.onclick = function () {
        var prime = -1;
        for (let i = 0; i < array.length; i++) {
            if(isPrime(array[i])){
                prime = array[i];
                break;
            }
        }
        if(prime == -1){
            resultprimeNum.innerHTML = 'Dont have any prime value in array'
        }
        else{
            resultprimeNum.innerHTML = prime
        }
    }
}
numberPrime()