var inputField = document.getElementById('inputField')
var resultShow = false


function calc(value){
    if(resultShow){
        inputField.value='';
        resultShow=false
    }
    inputField.value += value
}
function calcAns() {
    var ans = eval(inputField.value)
    inputField.value = ans
    resultShow=true
}
function calDelAllValue() {
    inputField.value = ''
    resultShow=false

}
function calDelValue(){
    inputField.value = inputField.value.slice(0,-1)
}
 function calPer(){
    inputField.value = inputField.value/100
 }




