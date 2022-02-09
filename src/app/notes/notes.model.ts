import { Language } from "../shared/language.model";

export class Notes {
    public name: string;
    public description: string;
    public imagePath: string;
    public languages: Language[];
  
    constructor(name: string, desc: string, imagePath: string, languages: Language[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.languages = languages;
    }
  }
  