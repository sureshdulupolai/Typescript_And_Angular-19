import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})

export class DatabindingComponent {

  // variable inside class is know as property, display in template
  name = "suresh";
  age=19;
  placeholder="enter your name";
  color="red";
  username = "";

  // creating a new function on click
  showAlert() {
    alert("Button Clicked");
  }

  changePlaceHolder(value: string){
    this.placeholder = value;
  }

  buttonColor(value: string){
    this.color = value || "green";
  }

}
