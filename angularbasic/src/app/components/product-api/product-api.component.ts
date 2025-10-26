import { Component } from '@angular/core';
import { ProdcutsAPI, ProductAPIService } from '../../services/product-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-api',
  imports: [CommonModule],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductAPIComponent {
  product !: ProdcutsAPI;
  constructor(private productService: ProductAPIService) {
  
  }
  
  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (data) => {
        this.product = data;
      }
    })
  }

}
