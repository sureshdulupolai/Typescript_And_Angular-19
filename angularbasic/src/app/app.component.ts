import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from "./components/navabar/navabar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavabarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularbasic';
}
