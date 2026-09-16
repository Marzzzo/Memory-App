/**
 * Creates the HTML template for the game page.
 *
 * @returns The game page template as an HTML string.
 */
export function gamePageTemplate(): string {
  return /*html*/ `
              <main class="game-main">
        <section class="game-main__content">
          <header class="game-main__header">
            <div class="game-main__header--left">
              <div class="game-main__header--left--blue">
                <img src="./assets/blue-label.svg" alt="" />
                <span>Blue</span>
                <span>0</span>
              </div>
              <div class="game-main__header--left--orange">
                <img src="./assets/orange-label.svg" alt="" />
                <span>Orange</span>
                <span>0</span>
              </div>
            </div>
            <div class="header-mid">
              <span>Current player:</span>
              <img src="./assets/blue-label.svg" alt="" />
            </div>
            <button class="header-right">
              <img src="./assets/exit-icon.svg" alt="" />
              <span>Exit game</span>
            </button>
          </header>
          <div class="card-section">
          //cards rendered here//
          </div>
        </section>
      </main>
    `;
}

/**
 * Creates the HTML template for a memory card.
 *
 * @returns The card template as an HTML string.
 */
export function cardTemplate(image: string): string {
  return `
    <div class="card">
      <div class="card__inner">
        <div class="card__front">
          <img src="./assets/dev-icon.svg" alt="">
        </div>
        <div class="card__back">
          <img src="${image}" alt="">
        </div>
      </div>
    </div>
  `;
}
