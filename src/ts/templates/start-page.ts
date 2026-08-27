const ASSETS = {
  controllerSmall: "./assets/controller_small.svg",
  arrowRight: "./assets/arrow_right.svg",
  arrowRightHover: "./assets/arrow_right_hover.svg",
  controller: "./assets/controller.svg",
};

/**
 * Returns the HTML structure for the start page.
 */
export function startPage(): string {
  return /* html */ `
    <main class="hero-main">
      <section class="hero-headline">
        <div>
          <p class="hero-headline__first">It's play time.</p>
          <h1 class="hero-headline__second">Ready to play?</h1>
        </div>
        <button class="play-button" id="play-button">
          <img class="play-button__controller" src="${ASSETS.controllerSmall}" alt="controller_small" />
          <span class="play-button__text">play</span>
          <img class="play-button__arrow-icon play-button__arrow-icon--default" src="${ASSETS.arrowRight}" alt="arrow_right" />
          <img class="play-button__arrow-icon play-button__arrow-icon--hover" src="${ASSETS.arrowRightHover}" alt="arrow_right_hover" />
        </button>
        <img class="controller-img" src="${ASSETS.controller}" alt="controller-img" />
      </section>
    </main>
  `;
}
