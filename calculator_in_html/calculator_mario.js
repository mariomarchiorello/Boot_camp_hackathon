function add(){
    var numberFirst, numberSecond, answer;
    numberFirst = Number(document.getElementById("firstNumber").value);
    numberSecond = Number(document.getElementById("secondNumber").value);
    answer =  numberFirst + numberSecond;
    document.getElementById("showResult").innerHTML = answer;
}


function sub(){
    var numberFirst, numberSecond, answer;
    numberFirst = Number(document.getElementById("firstNumber").value);
    numberSecond = Number(document.getElementById("secondNumber").value);
    answer =  numberFirst - numberSecond;
    document.getElementById("showResult").innerHTML = answer;
}


function mul(){
    var numberFirst, numberSecond, answer;
    numberFirst = Number(document.getElementById("firstNumber").value);
    numberSecond = Number(document.getElementById("secondNumber").value);
    answer =  numberFirst * numberSecond;
    document.getElementById("showResult").innerHTML = answer;
}


function div(){
    var numberFirst, numberSecond, answer;
    numberFirst = Number(document.getElementById("firstNumber").value);
    numberSecond = Number(document.getElementById("secondNumber").value);
    answer = numberSecond === 0 ? "I PITY THE FOOL WHO DEVIDS BY ZERO --- Mr.T " : numberFirst / numberSecond;
    document.getElementById("showResult").innerHTML = answer;
}


