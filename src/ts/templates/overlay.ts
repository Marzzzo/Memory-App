import { playerScoreTemplate } from "./game-page";

export function exitOverlayTemplate(): string {
  return `
    <div id="exit-overlay" class="exit-overlay">
        <div class="exit-overlay__content">
          <div class="exit-overlay__inner">
            <p>Are you sure you want to quit the game?</p>
            <div class="exit-overlay__buttons">
              <button class="exit-overlay__button exit-overlay__button--continue" id="continue-game-button">Back to game</button>
              <button class="exit-overlay__button exit-overlay__button--exit" id="confirm-exit-button">Exit game</button>
            </div>
          </div>
        </div>
    </div>    
    `;
}

export function gameOverTemplate(): string {
  return `
      <div id="game-over-overlay" class="game-over-overlay">
        <div class="game-over-overlay__content">
          <img src="./public/assets/game over.svg" alt="" />
          <div class="game-over-overlay__score">
            <span>Final score</span>
            ${playerScoreTemplate()}
          </div>
        </div>
      </div>
  `;
}
