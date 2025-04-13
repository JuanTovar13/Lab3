// getData.ts
export interface Breed {
    id: string;
    type: string;
    attributes: {
      name: string;
      description: string;
      hypoallergenic: boolean;
      life: {
        min: number;
        max: number;
      };
      male_weight: {
        min: number;
        max: number;
      };
      female_weight: {
        min: number;
        max: number;
      };
    };
  }
  
  export async function getData(): Promise<Breed[]> {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    const json = await response.json();
    return json.data;
  }
  