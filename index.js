let premios = ["RESTAU. TODO","x2 MAX POCIÓN","EEVEE","PERISCOPIO","PIEDRA TRUENO","PIEDRA AGUA","PIEDRA NOCHE","PIEDRA HOJA","PIEDRA FUEGO","GLOBO HELIO","X100 ULTRABALL","X10 ESC. CORAZÓN","HIERBA ÚNICA","ATRAPAR DOS POKEMON DE RUTA","ESC. CORAZÓN","MAGIKARP","BANDA FOCUS","CINTA FOCUS","ALEATORIO DE LA POKÉDEX","SNEASEL","ALTARIA","HIPPOWDON","PIEDRA SOLAR","PAÑUELO SEDA","+1 VIDA","RESURRECCIÓN","GARRA AFILADA","NADA XD","MASTERBALL","VIDASFERA","TABLA DE ARCEUS (A ELEGIR)","CAMPANA ALIVIO","-1 VIDA (NO CUENTA VIDA 0)","TOXIESFERA","CAMPANA CONCHA","REV. METÁLICO","LLAMASFERA","MAGMATIZADOR","CINTA ELEGIDA","FÓSIL DE CORAZA","RESURRECIÓN +1 VIDA","GRIEZMANN","INICIAL PRIMERA GEN.","PROTECTOR","ELECTRIZADOR","X5 ESC. CORAZÓN","CUCHARA TORCIDA","SPIRITOMB","LEGENDARIO PROHIBIDO","BRONZONG","PIEDRA DÍA","INICIAL SEGUNDA GEN.","MACHAMP","GAFAS ESPECIALES","AGUA MÍSTICA","ARENA FINA","SEMILLA MILAGRO","ROCIO BONDAD","HECHIZO","DRAPION","STARAPTOR","INICIAL TERCERA GEN.","GARCHOMP","X5 MAX POCIÓN","FÓSIL CRÁNEO","X3 RESTAU. TODO","RESTOS","CARBÓN"];
let imgs = ["restautodo.png","maxpocion.png","eevee.png","periscopio.png","ptrueno.png","pagua.png","pnoche.png","phoja.png","pfuego.png","globohelio.png","ultraball.png","esccorazon.png","hunica.png","pokeball.png","esccorazon.png","magikarp.png","bandafocus.png","cintafocus.png","pokedex.png","sneasel.png","altaria.png","hippowdon.png","psolar.png","pseda.png","vida.png","revivir.png","gafilada.png","sandshdrew.png","masterball.png","vidasfera.png","tabla.png","calivio.png","vidant.png","toxiesfera.png","cconcha.png","rmetal.png","llamasfera.png","magmatizador.png","celegida.png","fcoraza.png","maxrevivir.png","griezmann.jpg","proak.png","protector.png","electrizador.png","esccorazon.png","ctorcida.png","spiritomb.png","giratina.png","bronzong.png","pdia.png","prelm.png","machamp.png","gespeciales.png","amistica.png","afina.png","smilagro.png","rbondad.png","hechizo.png","drapion.png","staraptor.png","prabedul.png","garchomp.png","maxpocion.png","fcraneo.png","restautodo.png","restos.png","carbon.png"];
let objetos = [];
for(var i = 0; i < premios.length; i++) {
    let aux = {premio:premios[i],img:imgs[i]};
    objetos.push(aux);
}
let num;

function girar() {
    num = Math.floor(Math.random()*(premios.length));
    resultado = "<div><h1>" + objetos[num].premio +"</h1><img width=200px src='img/" + objetos[num].img + "' /></div>";
    document.getElementById("resultado").innerHTML = resultado;
}
