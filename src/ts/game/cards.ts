import { cardTemplate } from "../templates/game-page";

export function createCards(amount: number): void {
  const cardSection = document.querySelector(".card-section");
  if (!cardSection) return;
  cardSection.classList.add(`card-section--${amount}`);
  cardSection.innerHTML = createCardTemplates(amount);
  initCards();
}

function createCardTemplates(amount: number): string {
  return Array.from({ length: amount }, () => cardTemplate()).join("");
}

function initCards(): void {
  document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    card.addEventListener("click", () => flipCard(card));
  });
}

function flipCard(card: HTMLElement): void {
  card.classList.toggle("card--flipped");
}
