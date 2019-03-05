import {Content} from './content-card/content-card-helper';

export const CONTENT: Content[] = [{
    contentId: 1,
    author: 'HelloDude',
    type: 'news',
    body: 'Things and stuff',
    tags: ['hello', 'world'],
    title: 'One'
}, {
    contentId: 2,
    author: 'Wew',
    type: 'story',
    body: 'Things and stuff2',
    imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    tags: ['hello1', 'world1'],
    title: 'Two'
}, {
    contentId: 3,
    author: 'Two guy',
    type: 'story',
    body: 'Things and stuff but not',
    tags: ['hello1', 'world1', 'things'],
    title: 'Three'
}, {
    contentId: 4,
    author: 'Geoff',
    type: 'story',
    body: 'IT IS IT',
    imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    tags: ['hewwo'],
    title: 'Four'
}, {
    contentId: 5,
    author: 'Five Guys',
    type: 'news',
    body: 'Burgers and Fries',
    imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    tags: ['burger', 'fries', 'big mac'],
    title: 'Five'
}];
