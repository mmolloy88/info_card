const card = document.getElementById("card-body");

card.addEventListener("click", flipCard);

function flipCard() {
  card.classList.toggle("flip-card");
}
