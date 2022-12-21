let premios = ["x2 RESTAU. TODO", "x2 MAX POCION"];
let imgs = ["sandshdrew.png","bulbasaur-trans.png"];
let objetos = [];
for(var i = 0; i < premios.length; i++) {
    let aux = {premio:premios[i],img:imgs[i]};
    objetos.push(aux);
}
let num;

function girar() {
    num = Math.floor(Math.random()*(premios.length));
    resultado = "<div><h1>" + objetos[num].premio +"</h1><img width=500px src='img/" + objetos[num].img + "' /></div>";
    document.getElementById("resultado").innerHTML = resultado;
}