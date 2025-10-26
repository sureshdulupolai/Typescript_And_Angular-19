import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() eventemitter:EventEmitter<string> = new EventEmitter();

  sendData(){
    // parent tak data pauchne ke liye .emit() use karte hai
    this.eventemitter.emit("Data From Child...");
  }

  

}
