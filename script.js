// 1. Sélectionner le bouton par son ID
const themeButton = document.getElementById("toggle-theme-btn");

// 2. Sélectionner l'élément sur lequel appliquer la classe (le corps de la page)
const bodyElement = document.querySelector("body");

themeButton.addEventListener("click", function () {
  // La logique de bascule sera insérée ici !
  console.log("Bouton cliqué !"); // Pour vérifier que l'événement fonctionne
});
themeButton.addEventListener("click", function () {
  // Toggle (bascule) : Si la classe est là, elle l'enlève. Si elle n'est pas là, elle l'ajoute.
  bodyElement.classList.toggle("dark-theme");

  // Bonus : Changer le texte du bouton pour indiquer l'action inverse
  if (bodyElement.classList.contains("dark-theme")) {
    themeButton.textContent = "Activer le Mode Clair";
  } else {
    themeButton.textContent = "Activer le Mode Sombre";
  }
});
