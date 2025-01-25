var button = document.createElement("span");

button.innerText = "Voir le site Anime sama";

button.className = "button";

button.addEventListener("click", function() {
  // Má»Ÿ URL trong tab má»›i khi click
  window.open("https://anime-sama.hair/", "_blank");
});
document.getElementById("view-full").appendChild(button);
