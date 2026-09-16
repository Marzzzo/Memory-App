import { THEMES } from "./themes";
import { cardTemplate } from "../templates/game-page";

/**
 * Creates the specified number of cards and initializes them.
 *
 * @param amount - The number of cards to create.
 */
export function createCards(amount: number, theme: keyof typeof THEMES): void {
  const cardSection = document.querySelector(".card-section");
  if (!cardSection) return;
  cardSection.classList.add(`card-section--${amount}`);
  cardSection.innerHTML = createCardTemplates(amount, theme);
  initCards();
}

/**
 * Creates shuffled card templates for the selected theme.
 *
 * @param amount - The total number of cards to create.
 * @param theme - The selected card theme.
 * @returns The generated card templates as an HTML string.
 */
function createCardTemplates(amount: number, theme: keyof typeof THEMES): string {
  const images = getCardImages(amount, theme);
  const shuffledImages = shuffleCards(images);
  return shuffledImages.map((image) => cardTemplate(image)).join("");
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

/**
 * Returns the card images for the selected theme and duplicates each image to create matching pairs.
 *
 * @param amount - The total number of cards.
 * @param theme - The selected card theme.
 * @returns An array of image paths containing matching pairs.
 */
function getCardImages(amount: number, theme: keyof typeof THEMES): string[] {
  const images = THEMES[theme].images.slice(0, amount / 2);
  return [...images, ...images];
}

/**
 * Shuffles the card images into a random order.
 *
 * @param images - The array of card image paths to shuffle.
 * @returns A new array containing the shuffled image paths.
 */
function shuffleCards(images: string[]): string[] {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}
