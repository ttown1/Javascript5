import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {filter} from 'rxjs/operators';
import {allowNewBindingsForStylingContext} from '@angular/core/src/render3/styling/class_and_style_bindings';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    contentA: Content[];
    name: string;
    constructor(private contentService: ContentService) {
        this.contentA = [];
    }

    ngOnInit() {
        this.contentService.getContentObs().subscribe(content => this.contentA = content);
    }
    search(x: string) {
        for (let cell of this.contentA) {
            if (cell.type === x) {
                console.log(cell);
            }
        }
    }
}
