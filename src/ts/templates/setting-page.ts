const ASSETS = {
  checkbox: "./assets/checkbox.svg",
  settingLine: "./assets/yellow_setting_line.svg",
  themeIcon: "./assets/theme_icon.svg",
  playerIcon: "./assets/choose_player_icon.svg",
  boardIcon: "./assets/board_icon.svg",
  vibesPreview: "./assets/vibes_theme_img.png",
  gamingPreview: "./assets/gaming_theme_img.png",
  projectsPreview: "./assets/da_projects_theme_img.png",
  playIcon: "./assets/play_icon.svg",
};

/**
 * Returns a selectable option.
 */
function optionTemplate(name: string, value: string, text: string, preview = "", checked = false): string {
  const previewAttribute = preview ? `data-preview="${preview}"` : "";
  const checkedAttribute = checked ? "checked" : "";
  return `
    <label class="label" ${previewAttribute}>
      <input class="label__input" type="radio" name="${name}" value="${value}" ${checkedAttribute} />
      <img class="label__checkbox" src="${ASSETS.checkbox}" alt="checkbox_img" />
      <span>${text}</span>
    </label>
  `;
}

/**
 * Returns the HTML structure for the settings page.
 */
export function settingPage(): string {
  return /*html*/ `
    <main class="settings-main">
      <section class="settings-content">
        <header class="settings-content__header">
          <h1>Settings</h1>
          <img src="${ASSETS.settingLine}" alt="settingline_img" />
        </header>
        <div class="themes-content">
          <fieldset class="theme">
            <legend class="theme__legend-content">
              <img src="${ASSETS.themeIcon}" alt="themes_icon" />
              <span>Game themes</span>
            </legend>
            ${optionTemplate("theme", "code-vibes", "Code vibes theme", ASSETS.vibesPreview, true)}
            ${optionTemplate("theme", "gaming", "Gaming theme", ASSETS.gamingPreview)}
            ${optionTemplate("theme", "da-projects", "DA Projects theme", ASSETS.projectsPreview)}
          </fieldset>
          <fieldset class="theme">
            <legend class="theme__legend-content">
              <img src="${ASSETS.playerIcon}" alt="player_icon" />
              <span>Choose player</span>
            </legend>
            ${optionTemplate("player", "blue", "Blue")}
            ${optionTemplate("player", "orange", "Orange")}
          </fieldset>
          <fieldset class="theme">
            <legend class="theme__legend-content">
              <img src="${ASSETS.boardIcon}" alt="board_icon" />
              <span>Board size</span>
            </legend>
            ${optionTemplate("board-size", "16", "16 cards")}
            ${optionTemplate("board-size", "24", "24 cards")}
            ${optionTemplate("board-size", "36", "36 cards")}
          </fieldset>
          <img class="theme-preview" src="${ASSETS.vibesPreview}" alt="theme_img" />
          <div class="selected-board">
            <div class="selected-board__text">
              <span class="selected-board__theme">Code vibes theme</span>
              <div class="selected-board__slash"></div>
              <span class="selected-board__player">Player</span>
              <div class="selected-board__slash"></div>
              <span class="selected-board__size">Board size</span>
            </div>
            <button class="board-button" disabled>
              <img src="${ASSETS.playIcon}" alt="play-icon" />
              <span>Start</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  `;
}
