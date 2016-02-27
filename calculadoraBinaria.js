var op1;
var op2;
function numero0(){
  var display = document.getElementById('display');
  display.innerHTML= "0";
}
function numero1(num){
  var display = document.getElementById('display');
  display.innerHTML= "1";
}
function suma(){
  var display = document.getElementById('display');
  op1 = display.innerHTML;
  document.getElementById('display').innerHTML ="";
}
function igual(){
  op2 =  document.getElementById('display').innerHTML;
  resultado = parseInt(op1) + parseInt(op2);
  document.getElementById('display').innerHTML = resultado.toString(2);
}
