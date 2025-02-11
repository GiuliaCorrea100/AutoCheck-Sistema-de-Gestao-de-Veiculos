//messagem de bom dia/tarde
var today = new Date();
var hourNow = today.getHours();
var educado;

if (hourNow > 18) {
    educado = "Boa noite!";
} else if (hourNow > 12) {
    educado = "Boa tarde!";
} else if (hourNow > 0) {
    educado = "Bom dia!";
} else {
    educado = "Bem vindo!";
}

document.writeln("<h3>" + educado + "</h3>");