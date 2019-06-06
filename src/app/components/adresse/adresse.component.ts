import {Component, Input, OnInit} from '@angular/core';
import {Adresse} from '../../models/Adresse';
import {AdresseService} from '../../services/adresse.service';
import {User} from '../../models/User';


@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss']
})
export class AdresseComponent implements OnInit {
  adresse: Adresse;
 @Input() user: User;

  constructor(private adressService: AdresseService) {
  }

  ngOnInit() {
    this.adressService.getAdresse(this.user.id).subscribe(adresseFromServer => this.adresse = adresseFromServer);
  }

}
