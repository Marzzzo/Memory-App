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

function init(): void {
  showStartPage();
}

const app = document.getElementById("app")!;

function showStartPage(): void {
  document.body.className = "start-page";
  app.innerHTML = startPage();
  const playButton = document.getElementById("play-button");
  playButton?.addEventListener("click", showSettingPage);
}

function showSettingPage(): void {
  document.body.className = "setting-page";
  app.innerHTML = settingPage();
}

init();
