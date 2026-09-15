export function initCards(): void {
  const cards = document.querySelectorAll<HTMLElement>(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => flipCard(card));
  });
}

function flipCard(card: HTMLElement): void {
  card.classList.toggle("card--flipped");
}