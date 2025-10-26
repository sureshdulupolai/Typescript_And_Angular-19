import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      const num = Number(args[i]);
      if (!isNaN(num)) {
        total += num;
      }
    }
    return `${value} Has Got ${total}`;
  }
}
