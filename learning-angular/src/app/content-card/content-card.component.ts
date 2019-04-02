import { Component, Input, OnInit } from '@angular/core';
import {Content} from "./content-list-helper";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() item: Content;
  @Input () last: boolean;

  constructor() { }

  ngOnInit() {
  }
  clickImage() {
    console.log(this.item.id);
  }
}
