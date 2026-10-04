/**
 * Initializes the exit game button.
 */
export function initGameExit(onExit: () => void): void {
  const exitButton = document.getElementById("exit-game-button");
  const continueButton = document.getElementById("continue-game-button");
  const confirmButton = document.getElementById("confirm-exit-button");
  exitButton?.addEventListener("click", openExitOverlay);
  continueButton?.addEventListener("click", closeExitOverlay);
  confirmButton?.addEventListener("click", onExit);
}

/**
 * Opens the exit game overlay.
 */
function openExitOverlay(): void {
  const overlay = document.getElementById("exit-overlay");
  overlay?.classList.add("exit-overlay--open");
}

function closeExitOverlay(): void {
  const overlay = document.getElementById("exit-overlay");
  if (!overlay) return;
  overlay?.classList.remove("exit-overlay--open");
  overlay?.classList.add("exit-overlay--closing");
  setTimeout(() => {
    overlay.classList.remove("exit-overlay--closing");
  }, 400);
}
