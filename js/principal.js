var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhvalido = true;
var alturaEhvalida = true;

if (peso <= 0 || peso >= 1000) {
    pesoEhvalido = false;
    tdImc.textContent = "peso invalido!"
}

if (altura <= 0 || altura >= 3.00) {
    alturaEhvalida = false;
    tdImc.textContent = "altura invalida!";
}

if (alturaEhvalida && pesoEhvalido) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2);
}



