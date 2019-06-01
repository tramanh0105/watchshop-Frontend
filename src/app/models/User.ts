export class User {
  id: number;
  benutzername: string;
  passwort: string;
  email: string;
  phonenummer: string;
  name: string;

  constructor(benutzername: string, passwort: string, email: string, phonenummer: string, name: string) {
    this.benutzername = benutzername;
    this.passwort = passwort;
    this.email = email;
    this.phonenummer = phonenummer;
    this.name = name;
  }
}
