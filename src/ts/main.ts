//base
import "../scss/main.scss";
import "../scss/base/_fonts.scss";
import "../scss/abstract/_mixin.scss";

//components
import "../scss/components/_buttons.scss";
import "../scss/components/_cards.scss";

//pages
import "../scss/pages/_start-page.scss";
import "../scss/pages/_setting-page.scss";
import "../scss/pages/_game-page.scss";

//templates
import { startPage } from "./templates/start-page";
import { settingPage } from "./templates/setting-page";
import { gamePage } from "./templates/game-page";

//settings
import { initThemeSelection } from "./settings/theme-selection";

//game
import { initCards } from "./game/cards";

/**
 * Initializes the application and displays the start page.
 */
function init(): void {
  showStartPage();
}

const app = document.getElementById("app")!;

/**
 * Displays the start page and adds the play button event.
 */
function showStartPage(): void {
  document.body.className = "start-page";
  app.innerHTML = startPage();
  const playButton = document.getElementById("play-button");
  playButton?.addEventListener("click", showSettingPage);
}

/**
 * Displays the settings page and initializes the theme selection.
 */
function showSettingPage(): void {
  document.body.className = "setting-page";
  app.innerHTML = settingPage();
  initThemeSelection();
  const startButton = document.querySelector<HTMLButtonElement>(".board-button");
  startButton?.addEventListener("click", showGamePage);
}

function showGamePage(): void {
  document.body.className = "game-page";
  app.innerHTML = gamePage();
  initCards();
}

init();
