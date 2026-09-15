import { cardTemplate } from "../templates/game-page";

/**
 * Creates the specified number of cards and initializes them.
 *
 * @param amount - The number of cards to create.
 */
export function createCards(amount: number): void {
  const cardSection = document.querySelector(".card-section");
  if (!cardSection) return;
  cardSection.classList.add(`card-section--${amount}`);
  cardSection.innerHTML = createCardTemplates(amount);
  initCards();
}

/**
 * Creates the HTML templates for the specified number of cards.
 *
 * @param amount - The number of card templates to create.
 * @returns The generated card templates as an HTML string.
 */
function createCardTemplates(amount: number): string {
  return Array.from({ length: amount }, () => cardTemplate()).join("");
}

/**
 * Initializes all cards and adds a click event to flip each card.
 */
function initCards(): void {
  document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    card.addEventListener("click", () => flipCard(card));
  });
}

/**
 * Flips a card by toggling its flipped state.
 *
 * @param card - The card element to flip.
 */
function flipCard(card: HTMLElement): void {
  card.classList.toggle("card--flipped");
}
