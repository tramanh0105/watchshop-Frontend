import {Component, Input, OnInit} from '@angular/core';
import {LagerService} from '../../services/lager.service';
import {Lager} from '../../models/Lager';

@Component({
  selector: 'app-lagers',
  templateUrl: './lagers.component.html',
  styleUrls: ['./lagers.component.sass']
})
export class LagersComponent implements OnInit {
  @Input() lagers: Lager[];

  constructor() {
  }

  ngOnInit() {

  }


}
