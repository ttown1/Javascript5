import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContentService} from '../services/content.service';
import {Content} from '../content-card/content-list-helper';
import {MessageService} from '../messages.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Input() list: Content[];
  @Output() listChange = new EventEmitter<Content[]>();
  contentItem: Content;

  constructor(private contentService: ContentService, private messageService: MessageService) {}

    ngOnInit() {
      this.contentItem = {
          title: "Placeholder Title",
          author: "Placeholder Author",
          body: "Placeholder Body Text",
          id: 0

      };
    }

    save(): void {
        let result;
        let promise1 = new Promise((success, fail) => {
                success("Content added - using promise: ");
                fail("Content failed to be added, try again");
        });
        if(this.contentItem.body == '') {
            promise1.then(failResult => result = failResult);
        } else {
            promise1.then(successResult => result = successResult);
            this.contentItem.id = this.list.length > 0 ? Math.max(...this.list.map(content => content.id || 0)) + 1 : 2000;
            this.contentService.addContent(this.contentItem)
                .subscribe(contentCameBackFromServer => {
                    this.messageService.add(result + ' ' + contentCameBackFromServer.title);
                    this.list = this.list.concat([contentCameBackFromServer]);
                    this.listChange.emit(this.list);
                    //console.log(this.list);
                });
        }
    }
}
