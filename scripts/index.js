// DestructingArrays
let TesteId2 = [1, 2, 5];
let [t1, t2, t3] = TesteId2;
console.log(t1 , t2, t3);

let TesteId3 = [300, 500, 700];
let tt1, trestante;
[tt1, ...trestante] = TesteId3;
console.log(tt1, trestante);
[, ...trestante] = TesteId3;
console.log(trestante);
let [teste1, , teste3] = TesteId3;
console.log(teste1, teste3);


//Objetos 
let carro = {id: 1000, style: "convertível"};
let {id, style} = carro;

console.log(id, style);

//SpreadSyntax
function StartCars(...rest){
    console.log(rest);
}
let carCodes= [503, 5463, 466, 54, 534, 434, 657];
StartCars(...carCodes);

//typeof 
console.log(typeof("String"));
console.log(typeof('f'));
console.log(typeof(carCodes));

//CommonType Conversions
var batata = 500;
console.log(Number.parseInt('55ABC'));
console.log(batata.toString());

// IIFE 
let app = (function() {
    let carId = 123;
    let getId = function(){
        return carId;
    };
    return {
        getId : getId
    };
})();
console.log(app.getId());

//Call e Apply
let o = {
    carId : 123, getId : function(prefix){
        return prefix + this.carId;
    }
};
let newCar = {carId : 456};
let Ferrari = {carId : 43456, preço : 300000};
console.log(o.getId.apply (Ferrari, ['ID do Carro - ']) );

//Bind
let i = {
    carId : 123, getId : function(){
        return this.carId;
    }
};
let newCar2 = {carId : 456};
let newFn = i.getId.bind(newCar2);
console.log(newFn());

//Arrows
var p1 = "ananas";
var p2 = "banana";
var p3 = "manga";
let testeseta = (p1, p2, p3) => p1 + " melhor que " + p3 + " e " + p2;
console.log(testeseta(p1, p2, p3));

//DefaultPar 
let trackCar = function(carId, city="NY"){
    console.log(`Tracking ${carId} in ${city}.`);
};
console.log(trackCar(123));
console.log(trackCar(123, "Lisboa"));

//Objetos e Construtores 
function Car(id){
    this.carId = id;
    this.start = function(){
        console.log("Start : " + this.carId);
    };
}
let fiat = new Car(100);  //Utilização do construtor 
fiat.start(); 


//Prototypes
function Car2(id){
    this.carId = id;
}
function Car3(id){
    this.carId = id;
}
Car2.prototype.start2 = function(){
    console.log("start: " + this.carId);
};
let mercedes = new Car2(2000);
mercedes.start2();

//JSON
console.log(JSON.stringify(Ferrari));
console.log(JSON.stringify(carCodes));

let jsonEntrada = ` [{"carId" : 4000}, {"carId" : 4054}, {"carId" : 4003}] `;
let arrayDeJson = JSON.parse(jsonEntrada);
console.log(arrayDeJson);

//Arrays

function ProcuraNoArray(array, string){
    let valorfinal;
    let indexs = "Nos indexes";
    for(let i = 0; i<= array.length; i++){
        if(array[i] == string){
            valorfinal += array[i] + " ";
            indexs += " " + i.toString();
        }
    }
    return valorfinal + " " + indexs; 
}

let jogadores = [
    {nome: "Ruben Dias", equipa: "benfica"}, {nome: "Alex Telles", equipa: "porto"}, {nome: "Rafa", equipa: "benfica"}, 
];

console.log(ProcuraNoArray(jogadores, "benfica"));
console.log(jogadores["benfica"]);

let carIds100 = [{carId : 1, style:"sean"}, {carId : 600, style:"sean1"}, {carId : 3, style:"sean2"}];
let car100 = carIds100.find(
    car => car.carId > 500
);
console.log(car100);

let benfica = jogadores.find(
    jogador => jogador.equipa == "benfica"
);
console.log(benfica);

let benfica2 = jogadores.every(
    jogador => jogador.equipa == "benfica"
);
console.log(benfica2);


//Classes 
import {Aviao} from './models/aviao.js';
import {Jato} from './models/aviao.js';
import { hostname } from 'os';
 
let aviao = new Aviao(50, "Boeing");
console.log(aviao);
console.log(aviao.identify(20));

let jato1 = new Jato(102, "Lockheed");
console.log(jato1);
console.log(jato1.luta());
console.log(jato1.identify(30));


                                // DOM e BOM 
                                // DOM E BOM 
                                // DOM E BOM
console.log(innerWidth);

// Tempo 
let timeoutId = setTimeout(function(){
    console.log("Passou 5 segundos");
}, 5000);

//Para cancelar 
let chave = true;
if (chave == true){
    clearTimeout(timeoutId);
};

let intervaloId = setInterval(function(){   
    console.log("!");
}, 500);

//Para cancelar 
if (chave == true)
clearInterval(intervaloId);


//Object Location 
let primeiroelemento = document.getElementById('p1');
console.log(primeiroelemento);

let classes = document.getElementsByClassName("pp1");
console.log(classes);
console.log(classes[0]);

let outroselementos = document.getElementsByTagName("p");
console.log(outroselementos);

//Modificar Elementos
let timeoutText = setTimeout(function(){
    primeiroelemento.textContent = "Olá mundo";
    outroselementos[1].style.color = "red";
    primeiroelemento.classList.add("p5");
}, 1000);

//Erros
try{
    let ttt100 = 0;
    throw new Error("o meu erro");
}
catch(erro){
    console.log("erro - ", erro);
}
finally{
    console.log("Ola mundo!");
}

//Promise 
let promise = new Promise(function (resolve, eject){
    setTimeout(reject, 100, "alguma coisa");
});
console.log(promise);
promise.then(
    value => console.log("fulfilled: " + value), error => console.log("rejected: " + error)
);




                                    //Conexões
                                    //Conexões
                                    //Conexões

//HTTP com XHR 
//let xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function(){
//    if (this.readyState == 4 && this.status == 200){
//        console.log(this.responseText);
//    }
//};
//xhttp.open("GET", "https://5c9a147b1a4c360014a1006d.mockapi.io/users", true);
//xhttp.send();

//HTTP com Jquery
import $ from 'jquery';
$.get("https://5c9a147b1a4c360014a1006d.mockapi.io/users", data => console.log("data - ", data)); //Le informação

let user = { name: "Francisco Barros", avatar: "francis.jpg"}; //Envia informação
let promisejquery = $.post("https://5c9a147b1a4c360014a1006d.mockapi.io/users", user);
promisejquery.then(
    data => console.log("data - ", data),
    error => console.log("error - ", error)
);
$.get("https://5c9a147b1a4c360014a1006d.mockapi.io/users", data => console.log("data - ", data));

//Enviar formularios
let formulario = document.getElementById("user-form");
//Impede que o formulario de erro e va para um vazio
formulario.addEventListener("submit", event => {event.preventDefault(); 
}
);

// Utilizar um formulario para enviar informação 
formulario.addEventListener("submit", event => {
let utilizador = formulario.elements["user"];
let avatar = formulario.elements["avatar"];
let erroUser = document.getElementById("user-error");

if (utilizador.value.length < 5) {
erroUser.textContent = "Dados Incorretos! - Nome têm de ter mais de 5 letras";
erroUser.style.color = "red";
utilizador.style.borderColor = "red";
utilizador.focus();
}
    else {
    console.log(utilizador.value, avatar.value);
    let userform = { nameform: utilizador.value, avatarform: avatar.value};
    let promisejquery2 = $.post("https://5c9a147b1a4c360014a1006d.mockapi.io/users", userform); 
    promisejquery2.then(
        data => console.log("data - ", data),
        error => console.log("error - ", error)
    );
    }
    
}   
);

                                    //Segurança
                                    //Segurança
                                    //Segurança
//Eval 

let inputString = "alert('Hello');";
eval(inputString);