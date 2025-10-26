import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GreetingPipe } from '../../pipes/greeting.pipe';
import { TotalPipe } from '../../pipes/total.pipe';

@Component({
  selector: 'app-pipe-example',
  imports: [CommonModule, GreetingPipe, TotalPipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  user = {email: 'abc@gmail.com', age:19, name:"Suresh"}
  date = new Date();

  
}
