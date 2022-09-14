const showNumber = document.getElementById('showNumber');
const numberValue = localStorage.getItem("number");
let numberValueNum = JSON.parse(numberValue);
console.log(numberValueNum);
showNumber.innerText = numberValue;
document.getElementById('increse').addEventListener('click', function(){
    numberValueNum = ++numberValueNum;
    console.log(numberValueNum);
    localStorage.setItem("number", JSON.stringify(numberValueNum));
    const numberValue = localStorage.getItem("number");
    showNumber.innerText = numberValue;
})
// localStorage.clear();