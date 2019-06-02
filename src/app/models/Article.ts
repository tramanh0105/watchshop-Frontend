export class Article {
  id: number;
  preis: number;
  beschreibung: string;
  hersteller: string;

  constructor(preis: number, beschreibung: string, hersteller: string) {
    this.preis = preis;
    this.beschreibung = beschreibung;
    this.hersteller = hersteller;
  }
}
