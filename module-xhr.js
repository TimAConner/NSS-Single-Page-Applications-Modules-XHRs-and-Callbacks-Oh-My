
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

function loadAnimals(){
    loadCarnivores();
    loadHerbivores();
}

loadAnimals();