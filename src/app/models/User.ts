import {Adresse} from './Adresse';

export class User {
  id: number;
  benutzerName: string;
  email: string;
  phoneNummer: string;
  name: string;
  password: string;

  constructor(benutzername: string, email: string, phonenummer: string, name: string, password: string) {
    this.benutzerName = benutzername;
    this.email = email;
    this.phoneNummer = phonenummer;
    this.name = name;
    this.password = password;
  }
}
