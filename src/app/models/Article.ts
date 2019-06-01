export class Article {
  id: number;
  preis: number;
  beschreibung: string;
  hetsteller: string;

  constructor(preis: number, beschreibung: string, hetsteller: string) {
    this.preis = preis;
    this.beschreibung = beschreibung;
    this.hetsteller = hetsteller;
  }
}
