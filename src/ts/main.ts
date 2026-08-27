//base
import "../scss/main.scss";
import "../scss/base/_fonts.scss";
import "../scss/abstract/_mixin.scss";

//components
import "../scss/components/_buttons.scss";

//pages
import "../scss/pages/_start-page.scss";
import "../scss/pages/_setting-page.scss";

//templates
import { startPage } from "./templates/start-page";
import { settingPage } from "./templates/setting-page";

//settings
import { initThemeSelection } from "./settings/theme-selection";

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
}

init();
