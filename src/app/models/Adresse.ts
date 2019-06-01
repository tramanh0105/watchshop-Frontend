export class Adresse {
  id: number;
  strasse: string;
  hausnummer: number;
  plz: number;
  stadt: string;

  constructor(strasse: string, hausnummer: number, plz: number, stadt: string) {
    this.strasse = strasse;
    this.hausnummer = hausnummer;
    this.plz = plz;
    this.stadt = stadt;
  }
}
