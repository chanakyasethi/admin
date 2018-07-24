import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormate'
})
export class DateFormatePipe implements PipeTransform {

  transform(value: any) {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'MMM-dd-yyyy');
    return value;
  }

}
