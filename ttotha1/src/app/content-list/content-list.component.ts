import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
    contentA: Content[];
    constructor() {
        this.contentA = new Array();
        this.contentA[0] = {
            contentId: 1,
            author: 'HelloDude',
            type: 'stuff',
            body: 'Things and stuff',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello', 'world']
        };
        this.contentA[1] = {
            contentId: 2,
            author: 'Wew',
            type: 'stuff1',
            body: 'Things and stuff2',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello1', 'world1']
        };
        this.contentA[2] = {
            contentId: 3,
            author: 'Two guy',
            type: 'stuff is stuff',
            body: 'Things and stuff but not',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hello1', 'world1', 'things']
        };
        this.contentA[3] = {
            contentId: 4,
            author: 'Geoff',
            type: 'shtuff',
            body: 'IT IS IT',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['hewwo']
        };
        this.contentA[4] = {
            contentId: 5,
            author: 'Five Guys',
            type: 'food',
            body: 'Burgers and Fries',
            imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
            tags: ['burger', 'fries', 'big mac']
        };
    }

    ngOnInit() {

    }
}
