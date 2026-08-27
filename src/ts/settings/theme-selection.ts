/**
 * Initializes selection and preview events for all theme options.
 */
export function initThemeSelection(): void {
  getAllLabels().forEach(addSelectionEvents);
  getThemeLabels().forEach(addPreviewEvents);
}

/**
 * Returns all selectable labels.
 */
function getAllLabels(): NodeListOf<HTMLLabelElement> {
  return document.querySelectorAll(".label");
}

/**
 * Returns all labels that contain a preview image.
 */
function getThemeLabels(): NodeListOf<HTMLLabelElement> {
  return document.querySelectorAll(".label[data-preview]");
}

/**
 * Returns the input element inside the given label.
 */
function getInput(label: HTMLLabelElement): HTMLInputElement | null {
  return label.querySelector(".label__input");
}

/**
 * Returns the checkbox image inside the given label.
 */
function getCheckbox(label: HTMLLabelElement): HTMLImageElement | null {
  return label.querySelector(".label__checkbox");
}

/**
 * Returns the theme preview image element.
 */
function getThemePreview(): HTMLImageElement | null {
  return document.querySelector(".theme-preview");
}

/**
 * Sets the checked checkbox icon on hover.
 */
function setHoverIcon(label: HTMLLabelElement): void {
  const checkbox = getCheckbox(label);
  if (!checkbox) return;
  checkbox.src = "./assets/checkbox_checked.svg";
}

/**
 * Resets the checkbox icon based on the current selection state.
 */
function resetIcon(label: HTMLLabelElement): void {
  const input = getInput(label);
  const checkbox = getCheckbox(label);
  if (!input || !checkbox) return;
  checkbox.src = input.checked ? "./assets/checkbox_checked.svg" : "./assets/checkbox.svg";
}

/**
 * Updates all checkbox icons within the selected input group.
 */
function updateGroupIcons(input: HTMLInputElement): void {
  const inputs = document.querySelectorAll<HTMLInputElement>(`input[name="${input.name}"]`);
  inputs.forEach(updateInputIcon);
}

/**
 * Updates the checkbox icon of the given input.
 */
function updateInputIcon(input: HTMLInputElement): void {
  const label = input.closest<HTMLLabelElement>(".label");
  if (!label) return;
  resetIcon(label);
}

/**
 * Adds hover, leave, and change events to a selectable label.
 */
function addSelectionEvents(label: HTMLLabelElement): void {
  const input = getInput(label);
  label.addEventListener("mouseenter", () => setHoverIcon(label));
  label.addEventListener("mouseleave", () => resetIcon(label));
  input?.addEventListener("change", () => {
    handleSelectionChange(input);
  });
}

/**
 * Displays the preview image of the hovered theme.
 */
function showHoverPreview(label: HTMLLabelElement): void {
  const preview = getThemePreview();
  if (!preview || !label.dataset.preview) return;
  preview.src = label.dataset.preview;
}

/**
 * Returns the currently selected theme label.
 */
function getSelectedTheme(): HTMLLabelElement | null {
  return document.querySelector(".label[data-preview]:has(.label__input:checked)");
}

/**
 * Displays the preview image of the currently selected theme.
 */
function showSelectedPreview(): void {
  const selected = getSelectedTheme();
  const preview = getThemePreview();
  if (!selected?.dataset.preview || !preview) return;
  preview.src = selected.dataset.preview;
}

/**
 * Adds hover events to display and reset the theme preview.
 */
function addPreviewEvents(label: HTMLLabelElement): void {
  label.addEventListener("mouseenter", () => {
    showHoverPreview(label);
  });
  label.addEventListener("mouseleave", showSelectedPreview);
}

/**
 * Returns the text of the label associated with the given input.
 */
function getLabelText(input: HTMLInputElement): string {
  const label = input.closest<HTMLLabelElement>(".label");
  const text = label?.querySelector("span");
  return text?.textContent?.trim() ?? "";
}

/**
 * Returns the output element for the given selection group.
 */
function getOutput(name: string): HTMLSpanElement | null {
  const outputs: Record<string, string> = {
    theme: ".selected-board__theme",
    player: ".selected-board__player",
    "board-size": ".selected-board__size",
  };
  return document.querySelector(outputs[name]);
}

/**
 * Updates the displayed text with the selected option.
 */
function updateSelectedText(input: HTMLInputElement): void {
  const output = getOutput(input.name);
  if (!output) return;
  output.textContent = getLabelText(input);
}

/**
 * Checks whether all required options are selected.
 */
function isSelectionComplete(): boolean {
  const theme = document.querySelector('input[name="theme"]:checked');
  const player = document.querySelector('input[name="player"]:checked');
  const size = document.querySelector('input[name="board-size"]:checked');
  return !!theme && !!player && !!size;
}

/**
 * Updates the start button based on the selection state.
 */
function updateStartButton(): void {
  const button = document.querySelector<HTMLButtonElement>(".board-button");
  if (!button) return;
  button.disabled = !isSelectionComplete();
}

/**
 * Updates the UI when a selection changes.
 */
function handleSelectionChange(input: HTMLInputElement): void {
  updateGroupIcons(input);
  updateSelectedText(input);
  updateStartButton();
}
