
import { Breed } from "./getData";

export function createCard(content: string): HTMLDivElement {
  const card = document.createElement("div");
  card.className = "card";
  card.style.border = "1px solid #ccc";
  card.style.padding = "1rem";
  card.style.margin = "0.5rem";
  card.style.borderRadius = "8px";
  card.innerHTML = content;
  return card;
}
