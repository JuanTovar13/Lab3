// components/GeneralList.ts
import { Breed } from "./getData";
import { createCard } from "./card";

export function renderGeneralList(breeds: Breed[], containerId: string): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  breeds.forEach(breed => {
    const content = `
      <h3>${breed.attributes.name}</h3>
      <p>${breed.attributes.description}</p>
      <p><strong>Hipoalergénico:</strong> ${breed.attributes.hypoallergenic ? "Sí" : "No"}</p>
    `;
    container.appendChild(createCard(content));
  });
}
