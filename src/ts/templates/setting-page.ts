/**
 * Returns the HTML structure for the settings page.
 */
export function settingPage(): string {
  return /*html*/ `
      <main class="settings-main">
        <section class="settings-content">
          <header class="settings-content__header">
            <h1>Settings</h1>
            <img src="./assets/yellow_setting_line.svg" alt="" />
          </header>
          <div class="themes-content">
            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./assets/theme_icon.svg" alt="" />
                <span>Game themes</span>
              </legend>
              <label class="label" data-preview="./assets/vibes_theme_img.png">
                <input class="label__input" type="radio" name="theme" value="code-vibes" checked />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>Code vibes theme</span>
              </label>
              <label class="label" data-preview="./assets/gaming_theme_img.png">
                <input class="label__input" type="radio" name="theme" value="gaming" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>Gaming theme</span>
              </label>
                      <label class="label" data-preview="./assets/da_projects_theme_img.png">
                <input class="label__input" type="radio" name="theme" value="gaming" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>DA Projects theme</span>
              </label>
            </fieldset>
            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./assets/choose_player_icon.svg" alt="" />
                <span>Choose player</span>
              </legend>
              <label class="label">
                <input class="label__input" type="radio" name="player" value="blue" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>Blue</span>
              </label>
              <label class="label">
                <input class="label__input" type="radio" name="player" value="orange" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>Orange</span>
              </label>
            </fieldset>
            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./assets/board_icon.svg" alt="" />
                <span>Board size</span>
              </legend>
              <label class="label">
                <input class="label__input" type="radio" name="board-size" value="16" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>16 cards</span>
              </label>
              <label class="label">
                <input class="label__input" type="radio" name="board-size" value="24" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>24 cards</span>
              </label>
              <label class="label">
                <input class="label__input" type="radio" name="board-size" value="36" />
                <img class="label__checkbox" src="./assets/checkbox.svg" alt="" />
                <span>36 cards</span>
              </label>
            </fieldset>
            <img class="theme-preview" src="./assets/vibes_theme_img.png" alt="" />
            <div class="selected-board">
              <div class="selected-board__text">
                <span class="selected-board__theme">Code vibes theme</span>
                <div class="selected-board__slash"></div>
                <span class="selected-board__player">Player</span>
                <div class="selected-board__slash"></div>
                <span class="selected-board__size">Board size</span>
              </div>
              <button class="board-button" disabled>
                <img src="./assets/play_icon.svg" alt="play-icon" />
                <span>Start</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    `;
}
