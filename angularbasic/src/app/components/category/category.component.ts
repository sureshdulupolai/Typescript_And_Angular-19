import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() id = 0;
  @Input() cat_name = "";
}
