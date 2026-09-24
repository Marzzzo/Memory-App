let currentPlayer = "blue";

/**
 * Returns the icon path for the selected player.
 *
 * @param player - The selected player color.
 * @returns The path to the corresponding player icon.
 */
export function getPlayerIcon(player: string): string {
  return player === "orange" ? "./assets/orange-label.svg" : "./assets/blue-label.svg";
}
