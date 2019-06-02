import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {of} from 'rxjs';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';

@Component({
  selector: 'app-warenkorbs',
  templateUrl: './warenkorbs.component.html',
  styleUrls: ['./warenkorbs.component.sass']
})
export class WarenkorbsComponent implements OnInit {
  warenkorbs: Warenkorb[];
  user: User;

  constructor(private warenkorbService: WarenkorbService) {
  }

  ngOnInit() {
    // Example: userId = 2
    this.warenkorbService.getWarenkorbsByUserId(2).subscribe(warenkorbsFromServer => {
      this.warenkorbs = warenkorbsFromServer;
      this.user = this.warenkorbs[0].user;
      console.log(this.warenkorbs);
    });
  }
}
