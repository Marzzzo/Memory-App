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

function init(): void {
  showStartPage();
}

const app = document.getElementById("app")!;

function showStartPage(): void {
  app.innerHTML = startPage();
}

init();
