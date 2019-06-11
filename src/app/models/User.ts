import {Adresse} from './Adresse';

export class User {
  id: number;
  benutzerName: string;
  email: string;
  geburtsdatum: string;
  phoneNumer: string;
  name: string;
  password: string;

  constructor(benutzername: string, email: string, geburtsdatum: string, phoneNumer: string, name: string, password: string) {
    this.benutzerName = benutzername;
    this.email = email;
    this.geburtsdatum = geburtsdatum;
    this.phoneNumer = phoneNumer;
    this.name = name;
    this.password = password;
  }
}
