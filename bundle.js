(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    let carnivores = [];
    let herbivores = [];

    module.exports.loadCarnivores = function(callbackToInvoke) {
        const loader = new XMLHttpRequest();

        loader.addEventListener("load", function() {
            // Set the value of the private array
            carnivores = JSON.parse(this.responseText);

            // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
            callbackToInvoke(carnivores, "Carnivores");
        });
        loader.open("GET", "carnivores.json");  
        loader.send();       
    };

    module.exports.loadHerbivores = function(callbackToInvoke) {
        const loader = new XMLHttpRequest();

        loader.addEventListener("load", function() {
            // Set the value of the private array
            herbivores = JSON.parse(this.responseText);

            // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
            callbackToInvoke(herbivores, "Herbivores");
        });
        loader.open("GET", "herbivores.json");  
        loader.send();       
    };

 
},{}],2:[function(require,module,exports){
const moduleXhr = require('./moduleXhr');
moduleXhr.loadAnimals();


},{"./moduleXhr":3}],3:[function(require,module,exports){
const animal = require("./animal");

    function loadCarnivores(){
        animal.loadCarnivores(print);
    }

    function loadHerbivores(){
        animal.loadHerbivores(print);
    }

    function print(animals, header){
        let output = document.getElementById("output");
        output.appendChild(createElement("h1", header));
        for(let i = 0; i < animals.animals.length; i++){
            output.appendChild(createElement("p", animals.animals[i].name));
        }
    }

    function createElement(nodeType, text){
        let node = document.createElement(nodeType);
        let nodeText = document.createTextNode(text);
        node.appendChild(nodeText);
        return node;
    }

    module.exports.loadAnimals = function(){
        loadCarnivores();
        loadHerbivores();
    }
},{"./animal":1}]},{},[2]);
