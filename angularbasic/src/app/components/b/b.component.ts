import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  @Input() receivedData = "";

}
