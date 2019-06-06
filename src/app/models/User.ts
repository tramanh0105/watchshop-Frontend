import {Adresse} from './Adresse';

export class User {
  id: number;
  benutzerName: string;
  passwort: string;
  email: string;
  phoneNummer: string;
  name: string;
  adresse: Adresse;

  constructor(benutzername: string, passwort: string, email: string, phonenummer: string, name: string, adresse: Adresse) {
    this.benutzerName = benutzername;
    this.passwort = passwort;
    this.email = email;
    this.phoneNummer = phonenummer;
    this.name = name;
    this.adresse = adresse;
  }
}
