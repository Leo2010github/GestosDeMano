//https://teachablemachine.withgoogle.com/models/NZOm3h7Nj/
Webcam.attach("#Camara");
Webcam.set({width: 250, height: 250, image_format:"png", png_quality: 90});
function foto(){ 
    Webcam.snap(function(pixeles){
        document.getElementById("Imagen").innerHTML = "<img src= " + pixeles + " id= 'ju' >"
    });
}
var teachablemachine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NZOm3h7Nj/model.json", Cargo);
function Cargo(){
   console.log("oailuhsiufhaliwen,mnn,kzhgp9uyhP98WYEFPA9E8HFCCMJCMCFMCFMCFCMFFCJFJMJMJXMJHGBFHGBFHJNG");
}
function Reconocer(){
    a = document.getElementById("ju");
    teachablemachine.classify(a, EoR);
}
function EoR(Errores, Resultados){
    if (Errores) {
        console.error(Errores);
    }
    else{
        console.log(Resultados);
        document.getElementById("P1").innerHTML = Resultados[0].label;
        document.getElementById("P2").innerHTML = Resultados[1].label;
    }
}