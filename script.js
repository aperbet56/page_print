// Récupération des éléments
const btn = document.querySelector(".print__page__btn");

// Déclaration de la fonction pageprint qui va permettre d'imprimer une page
const pagePrint = (paravalue) => {
  const backup = document.body.innerHTML;
  const content = document.getElementById(paravalue).innerHTML;
  document.body.innerHTML = content;
  window.print();
  document.body.innerHTML = backup;
};

// Ecoute de l'événement "click" et appel de la fonction pagePrint
btn.addEventListener("click", () => {
  pagePrint("print");
});
