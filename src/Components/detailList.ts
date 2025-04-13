import { Breed } from "./getData";
import { createCard } from "./card";

export function renderDetailList(breeds: Breed[], containerId: string): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  breeds.forEach(breed => {
    const content = `
      <h3>${breed.attributes.name}</h3>
      <p><strong>Esperanza de vida:</strong> ${breed.attributes.life.min} - ${breed.attributes.life.max} años</p>
      <p><strong>Peso macho:</strong> ${breed.attributes.male_weight.min} - ${breed.attributes.male_weight.max} kg</p>
      <p><strong>Peso hembra:</strong> ${breed.attributes.female_weight.min} - ${breed.attributes.female_weight.max} kg</p>
    `;
    container.appendChild(createCard(content));
  });
}
