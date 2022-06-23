function Login(){
  let num1 = document.getElementById('num1').value; //toma los datos del input
  let num2 = document.getElementById('num2').value;
  let resultado = document.getElementById('resultado');
  
  console.log(num1);
  console.log(num2);
}  
  //resultado.innerHTML = num1 + num2;

  //formulario.reset();  //limpia inputs del formulario
  function limpiar(){
    document.getElementById('myform').reset()
  document.getElementById('resultado').innerHTML = "";
  }



function sumar () {

  let num1 = document.getElementById('num1').value; //toma los datos del input
  let num2 = document.getElementById('num2').value;
  let resultado = parseInt(num1) + parseInt(num2); //parseint convierte string en numero x lo gral
  console.log(`El resultado de la suma es: ${resultado}`); 
  document.getElementById('resultado').innerHTML = resultado;
  //document.getElementById('resultadoInput').value = resultado;


}

function restar () {
  let num1 = document.getElementById('num1').value; //toma los datos del input
  let num2 = document.getElementById('num2').value;
  let resultado = parseInt(num1) - parseInt(num2); //parseint convierte string en numero x lo gral
  console.log(`El resultado de la resta es: ${resultado}`); 
  document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar () {
  let num1 = document.getElementById('num1').value; //toma los datos del input
  let num2 = document.getElementById('num2').value;
  let resultado = parseInt(num1) * parseInt(num2); //parseint convierte string en numero x lo gral
  console.log(`El resultado de la multiplicacion es: ${resultado}`); 
  document.getElementById('resultado').innerHTML = resultado;
}

function dividir () {
  let num1 = document.getElementById('num1').value; //toma los datos del input
  let num2 = document.getElementById('num2').value;
  let resultado = parseInt(num1) / parseInt(num2); //parseint convierte string en numero x lo gral
  console.log(`El resultado de la division es: ${resultado}`); 
  document.getElementById('resultado').innerHTML = resultado;
  }

