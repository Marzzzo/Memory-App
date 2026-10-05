import { addPoint, switchPlayer } from "./player";

let firstCard: HTMLElement | null = null;
let secondCard: HTMLElement | null = null;
let isChecking = false;

/**
 * Flips the selected card and stores it for comparison.
 *
 * @param card - The card element to flip.
 */
export function flipCard(card: HTMLElement): void {
  if (isChecking || card === firstCard) return;
  card.classList.add("card--flipped");
  if (!firstCard) {
    firstCard = card;
    return;
  }
  secondCard = card;
  checkCards();
}

/**
 * Checks whether the two selected cards match.
 */
function checkCards(): void {
  if (!firstCard || !secondCard) return;
  isChecking = true;
  if (cardsMatch()) {
    cardsAsMatched();
    addPoint();
    resetCards();
    return;
  }
  setTimeout(flipCardsBack, 1000);
}

function cardsAsMatched(): void {
  firstCard?.classList.add("card--matched");
  secondCard?.classList.add("card--matched");
}

/**
 * Checks whether the two selected cards have the same image.
 *
 * @returns True if the cards match, otherwise false.
 */
function cardsMatch(): boolean {
  return firstCard?.dataset.image === secondCard?.dataset.image;
}

/**
 * Flips both selected cards back and resets the current selection.
 */
function flipCardsBack(): void {
  firstCard?.classList.remove("card--flipped");
  secondCard?.classList.remove("card--flipped");
  switchPlayer();
  resetCards();
}

/**
 * Resets the selected cards and allows the next card selection.
 */
export function resetCards(): void {
  firstCard = null;
  secondCard = null;
  isChecking = false;
}
