export function settingPage(): string {
  return /*html*/ `
    <main class="settings-main">
        <section class="settings-content">
          <header class="settings-content__header">
            <h1>Settings</h1>
            <img src="./public/assets/yellow_setting_line.svg" alt="" />
          </header>
          <div class="themes-content">
            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./public/assets/theme_icon.svg" alt="" />
                <span>Game themes</span>
              </legend>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>Code vibes theme</span>
              </label>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>Gaming</span>
              </label>
            </fieldset>

            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./public/assets/choose_player_icon.svg" alt="" />
                <span>Choose player</span>
              </legend>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>Blue</span>
              </label>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>Orange</span>
              </label>
            </fieldset>

            <fieldset class="theme">
              <legend class="theme__legend-content">
                <img src="./public/assets/board_icon.svg" alt="" />
                <span>Board size</span>
              </legend>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>16 cards</span>
              </label>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>24 cards</span>
              </label>
              <label class="label" for="">
                <img src="./public/assets/checkbox.svg" alt="" />
                <span>36 cards</span>
              </label>
            </fieldset>
          </div>
        </section>
    </main>
    `;
}
