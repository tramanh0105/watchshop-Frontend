import {Component, Input, OnInit} from '@angular/core';
import {Warenkorb} from '../../models/Warenkorb';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorbItem.component.html',
  styleUrls: ['./warenkorbItem.component.sass']
})
export class WarenkorbItemComponent implements OnInit {
  @Input() warenkorbItem: Warenkorb;
  constructor() { }

  ngOnInit() {
  }

}
