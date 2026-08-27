var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r=e((()=>{})),i=e((()=>{})),a=e((()=>{})),o=e((()=>{})),s=e((()=>{}));function c(){return`
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
      `}var l=e((()=>{}));function u(){return`
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
    `}var d=e((()=>{}));function f(){p().forEach(S),m().forEach(E)}function p(){return document.querySelectorAll(`.label`)}function m(){return document.querySelectorAll(`.label[data-preview]`)}function h(e){return e.querySelector(`.label__input`)}function g(e){return e.querySelector(`.label__checkbox`)}function _(){return document.querySelector(`.theme-preview`)}function v(e){let t=g(e);t&&(t.src=`./assets/checkbox_checked.svg`)}function y(e){let t=h(e),n=g(e);!t||!n||(n.src=t.checked?`./assets/checkbox_checked.svg`:`./assets/checkbox.svg`)}function b(e){document.querySelectorAll(`input[name="${e.name}"]`).forEach(x)}function x(e){let t=e.closest(`.label`);t&&y(t)}function S(e){let t=h(e);e.addEventListener(`mouseenter`,()=>v(e)),e.addEventListener(`mouseleave`,()=>y(e)),t?.addEventListener(`change`,()=>{M(t)})}function C(e){let t=_();!t||!e.dataset.preview||(t.src=e.dataset.preview)}function w(){return document.querySelector(`.label[data-preview]:has(.label__input:checked)`)}function T(){let e=w(),t=_();!e?.dataset.preview||!t||(t.src=e.dataset.preview)}function E(e){e.addEventListener(`mouseenter`,()=>{C(e)}),e.addEventListener(`mouseleave`,T)}function D(e){return(e.closest(`.label`)?.querySelector(`span`))?.textContent?.trim()??``}function O(e){return document.querySelector({theme:`.selected-board__theme`,player:`.selected-board__player`,"board-size":`.selected-board__size`}[e])}function k(e){let t=O(e.name);t&&(t.textContent=D(e))}function A(){let e=document.querySelector(`input[name="theme"]:checked`),t=document.querySelector(`input[name="player"]:checked`),n=document.querySelector(`input[name="board-size"]:checked`);return!!e&&!!t&&!!n}function j(){let e=document.querySelector(`.board-button`);e&&(e.disabled=!A())}function M(e){b(e),k(e),j()}var N=e((()=>{}));t((()=>{n(),r(),i(),a(),o(),s(),l(),d(),N();function e(){p()}var t=document.getElementById(`app`);function p(){document.body.className=`start-page`,t.innerHTML=c(),document.getElementById(`play-button`)?.addEventListener(`click`,m)}function m(){document.body.className=`setting-page`,t.innerHTML=u(),f()}e()}))();