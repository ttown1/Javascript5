import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {filter} from 'rxjs/operators';
import {allowNewBindingsForStylingContext} from '@angular/core/src/render3/styling/class_and_style_bindings';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    contentA: Content[];
    name: string;
    constructor() {
        this.contentA = [];
        this.contentA[0] = {
            contentId: 1,
            author: 'HelloDude',
            type: 'news',
            body: 'Things and stuff',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello', 'world']
        };
        this.contentA[1] = {
            contentId: 2,
            author: 'Wew',
            type: 'story',
            body: 'Things and stuff2',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello1', 'world1']
        };
        this.contentA[2] = {
            contentId: 3,
            author: 'Two guy',
            type: 'story',
            body: 'Things and stuff but not',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello1', 'world1', 'things']
        };
        this.contentA[3] = {
            contentId: 4,
            author: 'Geoff',
            type: 'story',
            body: 'IT IS IT',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hewwo']
        };
        this.contentA[4] = {
            contentId: 5,
            author: 'Five Guys',
            type: 'news',
            body: 'Burgers and Fries',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['burger', 'fries', 'big mac']
        };
    }

    ngOnInit() {

    }
    search(x: string){
        for(let cell of this.contentA)
            if (cell.type == x) {
                console.log(cell)
            }
    }
}
