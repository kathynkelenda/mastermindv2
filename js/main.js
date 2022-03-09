let val1 = Math.floor(Math.random() * (9 - 0) + 0);
let val2 = Math.floor(Math.random() * (9 - 0) + 0);
let val3 = Math.floor(Math.random() * (9 - 0) + 0);
let val4 = Math.floor(Math.random() * (9 - 0) + 0);

let tour = 0;

console.log(val1, val2, val3, val4);
var n=0;

const valid = () => {
    let reponse1 = 'X';
    let reponse2 = 'X';
    let reponse3 = 'X';
    let reponse4 = 'X';

    console.log("Valid");
    let anwser1 = parseInt(document.querySelector('.anwser1').value);
    let anwser2 = parseInt(document.querySelector('.anwser2').value);
    let anwser3 = parseInt(document.querySelector('.anwser3').value);
    let anwser4 = parseInt(document.querySelector('.anwser4').value);

tour++;
if(anwser1===val1 && anwser2===val2 && anwser3===val3 && anwser4===val4 && tour<3){

    let div_limite = document.createElement('div');
    div_limite.innerHTML = "Fin de jeux. Vous avez gagné au bout de" + tour + " tour(s) ";
    document.querySelector('.limite').appendChild(div_limite)

}       
 else if(tour < 3){ 
    if (anwser1 === val1) {
        reponse1 = "1";
    } else {
        if (anwser2 != val2) {
            console.log("trouvé 2")
            reponse2= "."
        }
        if (anwser3 != val3) {
            console.log("trouvé 3")
            reponse3 = "."
        }
        if (anwser1 != val4) {
            console.log("trouvé 4")
            reponse4 = "."
        }
    }
    
    if (anwser2 === val2) {
        reponse2 = "1";
    } else {
        if (anwser1 != val1) {
            reponse1 = "."
        }
        if (anwser3 != val3) {
            reponse3 = "."
        }
        if (anwser4 != val4) {
            reponse4 = "."
        }
    }
    
    if (anwser3 === val3) {
        reponse3 = "1";
    } else {
        if (anwser1 != val1) {
            reponse1 = "."
        }
        if (anwser2 != val2) {
            reponse2 = "."
        }
        if (anwser4 != val4) {
            reponse4 = "."
        }
    }
    
    if (anwser4 === val4) {
        reponse4 = "1";
    } else {
        if (anwser1 != val1) {
            reponse1 = "."
        }
        if (anwser2 != val2) {
            reponse2 = "."
        }
        if (anwser3 != val3) {
            reponse3 = "."
        }
    }
    
    console.log(reponse1, reponse2, reponse3, reponse4);

    let div = document.createElement('div');
    div.classList.add('reponse'+tour)
    div.innerHTML = anwser1 + " - " + anwser2 + " - " + anwser3 + " - " + anwser4 + 
        '<br />' +
        reponse1 + " - " + reponse2 + " - " + reponse3 + " - " + reponse4;
    document.querySelector('.reponses').appendChild(div)
   
} else{
    let div_limite = document.createElement('div');
    div_limite.innerHTML = "Limite de tentative atteinte. Fin de jeux."
    document.querySelector('.limite').appendChild(div_limite)
    }
   
}

