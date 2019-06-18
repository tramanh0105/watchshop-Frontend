export class UserDTO {
  id: number;
  benutzerName: string;
  email: string;
  geburtsdatum: string;
  phoneNumer: string;
  name: string;

  constructor(benutzername: string, email: string, geburtsdatum: string, phoneNumer: string, name: string) {
    this.benutzerName = benutzername;
    this.email = email;
    this.geburtsdatum = geburtsdatum;
    this.phoneNumer = phoneNumer;
    this.name = name;
  }
}
