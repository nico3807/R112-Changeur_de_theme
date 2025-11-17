/**
 * TP Changeur de Thème - R1.12 Développement Web
 * Fichier : script.js
 */

// 1. SÉLECTION DES ÉLÉMENTS DU DOM (Q7 & Q8)

// Q7. Sélectionner le bouton par son ID 'toggle-theme-btn'.
const themeButton = document.getElementById("toggle-theme-btn");

// Q8. Sélectionner l'élément body par son nom de balise.
const bodyElement = document.querySelector("body");

// 2. ÉCOUTEUR D'ÉVÉNEMENT (Q10)

// Ajout d'un écouteur 'click' au bouton.
themeButton.addEventListener("click", function () {
  // Q13. Basculer la classe .dark-theme sur l'élément body.
  // .toggle() ajoute la classe si elle est absente, la retire si elle est présente.
  bodyElement.classList.toggle("dark-theme");

  // Q15 - Q17. Changer le texte du bouton en fonction du thème actif.
  if (bodyElement.classList.contains("dark-theme")) {
    // Q16. Si la classe .dark-theme est présente (Mode Sombre ACTIF)
    // Le texte propose l'action inverse : retourner au mode clair.
    themeButton.textContent = "Activer le Mode Clair";
  } else {
    // Q17. Sinon (Mode Clair ACTIF)
    // Le texte propose l'action inverse : passer au mode sombre.
    themeButton.textContent = "Activer le Mode Sombre";
  }

  // Note : Q9 et Q11 (console.log) ont été retirés du code final pour la propreté.
});
