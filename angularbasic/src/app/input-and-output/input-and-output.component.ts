import { Component } from '@angular/core';
import { AComponent } from "../components/a/a.component";
import { ProductComponent } from "../components/product/product.component";
import { CategoryComponent } from "../components/category/category.component";
import { ParentComponent } from "../components/parent/parent.component";

@Component({
  selector: 'app-input-and-output',
  imports: [AComponent, ProductComponent, CategoryComponent, ParentComponent],
  templateUrl: './input-and-output.component.html',
  styleUrl: './input-and-output.component.css'
})
export class InputAndOutputComponent {

}
