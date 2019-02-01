import {Component, Input} from '@angular/core';
import { Content } from './content-card-helper';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() stuff: Content;
  @Input() index: number;
  @Input() last: boolean;

  constructor() {
  }
  clicked() {
    console.log(this.stuff.contentId);
  }
}
