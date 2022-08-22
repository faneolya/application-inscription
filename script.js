$(".tab").css("display", "none");
$("#tab-1").css("display", "block");

function run(hideTab, showTab){
  if(hideTab < showTab){ 
    var currentTab = 0;
    x = $('#tab-'+hideTab);
    y = $(x).find("input")
    for (i = 0; i < y.length; i++){
      if (y[i].value == ""){
        $(y[i]).css("background", "#ffdddd");
        return false;
      }
    }
  }

  for (i = 1; i < showTab; i++){
    $("#step-"+i).css("opacity", "1");
  }
  for (i = 2; i < showTab; i++){
    $("#step-"+i).css("opacity", "1");
  }


  $("#tab-"+hideTab).css("display", "none");
  $("#tab-"+showTab).css("display", "block");
  $("input").css("background", "#fff");
}

let nomEleve = document.getElementById("nomeleve"),
prenomEleve = document.getElementById("prenomeleve"),
selectSexe = document.getElementById("sexe"),
dateEleve = document.getElementById("dateeleve"),
lieuEleve = document.getElementById("lieu"),
selectClasse = document.getElementById("classe");

let nomTuteur = document.getElementById("nomtuteur"),
prenomTuteur = document.getElementById("prenomtuteur"),
ProfessionTuteur = document.getElementById("Professiontuteur"),
emailTuteur = document.getElementById("emailtuteur"),
contactTuteur = document.getElementById("contacttuteur");




const nom = localStorage.getItem('nomEleve') || '',
  prenom = localStorage.getItem('prenom') || '',
  sexe = localStorage.getItem('sexe') || '',
  date = localStorage.getItem('date') || '',
  lieu = localStorage.getItem('lieu') || '',
  classe = localStorage.getItem('classe') || '',


  nomTut = localStorage.getItem('nomTut') || '',
  prenomTut = localStorage.getItem('prenomTut') || '',
  professionTut = localStorage.getItem('professionTut') || '',
  contactTut = localStorage.getItem('contactTut') || '',
  emailTut = localStorage.getItem('emailTut') || '';


let post = document.getElementById("regForm");

post.addEventListener("submit", function(event){
event.preventDefault()

let tableauEleve= {
nom: nomEleve.value,
prenom: prenomEleve.value,
sexe: selectSexe.value,
date: dateEleve.value,
lieu: lieuEleve.value,
classe: selectClasse.value,
nomTuteur: nomTuteur.value,
prenomTuteur : prenomTuteur.value,
profession: ProfessionTuteur.value,
contact: contactTuteur.value,
email: emailTuteur.value,




}
console.log(tableauEleve)
localStorage.setItem('tableauEleve', JSON.stringify(tableauEleve));






});
function submit (){
(e)  =>{
e.preventDefault();

const firstName = document.querySelector("#nomeleve").value;
const lastName = document.querySelector("#prenomeleve").value;
const sexe = document.querySelector("#sexe").value;
const date = document.querySelector("#dateeleve").value;


const list = document.querySelector("#regForm");
const row = document.createComment("tr")

row.innerHTML = `
    <td>${firstName}</td>
    <th>${lastName}</th>
    <th>${sexe}</th>
    <th>${date}</th>

`;
list.appendChild(row);



}


}
document.querySelector("#regForm").addEventListener("submit" , (e)  =>{
e.preventDefault();

const firstName = document.querySelector("#nomeleve").value;
const lastName = document.querySelector("#prenomeleve").value;
const sexe = document.querySelector("#sexe").value;
const date = document.querySelector("#dateeleve").value;


const list = document.querySelector("#regForm");
const row = document.createComment("tr")

row.innerHTML = `
    <td>${firstName}</td>
    <th>${lastName}</th>
    <th>${sexe}</th>
    <th>${date}</th>

`;
list.appendChild(row);


}

) 

var tableaux= document.getElementById("nomeleve").innerHTML;
console.log(tableaux);




