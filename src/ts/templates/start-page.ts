export function startPage(): string {
  return `    <main class="hero-headline">
      <div>
        <p class="hero-headline__first">It's play time.</p>
        <h1 class="hero-headline__second">Ready to play?</h1>
      </div>
      <button class="play-button">
        <div class="play-button__inner">
          <img class="play-button__controller" src="/public/assets/controller_small.svg" alt="controller_small" />
          <span class="play-button__text">play</span>
          <span class="play-button__arrow">
            <img class="play-button__arrow-icon play-button__arrow-icon--default" src="./public/assets/arrow_right.svg" alt="" />
            <img class="play-button__arrow-icon play-button__arrow-icon--hover" src="./public/assets/arrow_right_hover.svg" alt="" />
          </span>
        </div>
      </button>
      <img class="controller-img" src="/public/assets/controller.svg" alt="controller-img" />
    </main>`;
}
