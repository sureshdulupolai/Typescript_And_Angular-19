import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'  // write this name on template => greeting, this greeting call to "transform"
})
export class GreetingPipe implements PipeTransform {

  // value => template mai jo data rahega
  transform(value: unknown, ...args: unknown[]): unknown {
    return "Welcome " + value;
  } // transform func jo bhi return karega wahi template mai show hoga

}
