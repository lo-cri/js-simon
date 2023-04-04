// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// let RandomNumber = Math.floor( ( Math.random() * 100 ) +1);


var RandomNumbers = []
var CorrectNumbers = []


function startgame(){
    let containerHtml = document.querySelector(".container");
    document.getElementById("main-color").style.backgroundColor="aquamarine";

    // Visualizzare in pagina 5 numeri casuali.
    for( let x = 1; x <= 5; x++){

        let RandomNumber = Math.floor( ( Math.random() * 100 ) +1);

        RandomNumbers.push(RandomNumber)


        let createDiv = document.createElement('div');
    
            createDiv.className = 'box'
            containerHtml.append( createDiv )
            createDiv.innerHTML = RandomNumber;
    
        }

}



function EndGame(){
    //let prova = prompt("Please enter your name", "Harry Potter");
    let containerHtml = document.querySelectorAll(".container");
    containerHtml.forEach(e => e.remove());
    document.getElementById("main-color").style.backgroundColor="white";
    setTimeout(() => {
        for(let x = 1; x <= 5; x++){
            let ChosenNumb = parseInt(prompt("Inserisci uno dei 5 numeri:"))
            console.log(RandomNumbers.includes(ChosenNumb))
            if(RandomNumbers.includes(ChosenNumb)){
                CorrectNumbers.push(ChosenNumb)
            }
        }
        let mainHtml = document.querySelector("#main-color");
        let container = document.createElement('div');
        container.className = 'container'
        mainHtml.append( container )

        let containerHtml2 = document.querySelector(".container");
        let createDiv = document.createElement('div');
        containerHtml2.append( createDiv )

        createDiv.innerHTML = `Hai indovinato: ${CorrectNumbers.length} su 5 e sono: ${CorrectNumbers}`
              
    }, 500)
   
    
    document.addEventListener("click", handler, true);
        
    function handler(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    console.log(containerHtml)
}

function EndGame2(){
    let containerHtml = document.querySelector(".container");
    let createDiv = document.createElement('div');
    
    createDiv.className = 'box'
    containerHtml.append( createDiv )
    createDiv.innerHTML = "VAFANCULO";
    
}
