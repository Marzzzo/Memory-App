export function startPage(): string {
  return /* html */ `
      <main class="hero-main">
        <section class="hero-headline">
          <div>
            <p class="hero-headline__first">It's play time.</p>
            <h1 class="hero-headline__second">Ready to play?</h1>
          </div>

          <button class="play-button" id="play-button">
            <img class="play-button__controller" src="./assets/controller_small.svg" alt="controller_small" />
            <span class="play-button__text">play</span>
            <img class="play-button__arrow-icon play-button__arrow-icon--default" src="./assets/arrow_right.svg" alt="" />
            <img class="play-button__arrow-icon play-button__arrow-icon--hover" src="./assets/arrow_right_hover.svg" alt="" />
          </button>

          <img class="controller-img" src="./assets/controller.svg" alt="controller-img" />
        </section>
      </main>
      `;
}
