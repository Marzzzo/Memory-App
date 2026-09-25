let currentPlayer = "";
let blueScore = 0;
let orangeScore = 0;

export function setCurrentPlayer(player: string): void {
  currentPlayer = player;
}

export function switchPlayer(): void {
  currentPlayer = currentPlayer === "blue" ? "orange" : "blue";
  updatePlayerIcon();
}

export function addPoint(): void {
  if (currentPlayer === "blue") blueScore++;
  if (currentPlayer === "orange") orangeScore++;
  updateScore();
}

export function updatePlayerIcon(): void {
  const icon = document.getElementById("current-player-icon") as HTMLImageElement;
  if (!icon) return;
  icon.src = getPlayerIcon(currentPlayer);
}

function updateScore(): void {
  const blueScoreElement = document.getElementById("blue-score");
  const orangeScoreElement = document.getElementById("orange-score");
  if (blueScoreElement) blueScoreElement.textContent = blueScore.toString();
  if (orangeScoreElement) orangeScoreElement.textContent = orangeScore.toString();
}

/**
 * Returns the icon path for the selected player.
 *
 * @param player - The selected player color.
 * @returns The path to the corresponding player icon.
 */
export function getPlayerIcon(player: string): string {
  return player === "orange" ? "./assets/orange-label.svg" : "./assets/blue-label.svg";
}
