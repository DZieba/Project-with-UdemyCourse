import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstatus): any {
    if (filterstatus === "") {
      return value
    }
    else {
      const resultArray = [];
      for (const item of value) {
        if (item.status === filterstatus) {
          resultArray.push(item)
        }
      }
      return resultArray;
    }

  }
}
