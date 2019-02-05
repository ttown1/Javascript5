import { Pipe, PipeTransform } from '@angular/core';
import { Content} from './content-card/content-card-helper';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(content: Content[], s: string): any {
    return content.filter(c => c.type == s)
  }

}
