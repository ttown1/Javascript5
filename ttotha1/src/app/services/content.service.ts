import { Injectable } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {CONTENT} from '../contentDB';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT);
  }
}
