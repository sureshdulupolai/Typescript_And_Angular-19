import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  providers: [CategoryService] // create new object for new page, if you dont mention Injectable() => 'root'
})

// create every object for each component
// this is consume more memory
export class ServiceComponent {

  products:any[] = []

  // constructor => speeling sahi rakhna chachiye
  // private nhi lagaya toh constructor ke bhar bhi access kar sakte hai agar lagaya hai toh uske andar hi save hoga
  // constructor(private productService: ProductService)
  constructor(private productService: ProductService) {
    this.products = productService.getProduct()
  }
  
  getProductById(id: number){
   this.products = this.productService.getProductById(id);
   console.log(this.products);
  }

  getAllProduct(){
    this.products = this.productService.getProduct()
  }

  // field level injuctions
  categoryService=inject(CategoryService);
  categories:any[] = []
  setValue = true

  toggleCategories() {
    this.setValue = !this.setValue; // flip the flag
    this.getCategories(this.setValue);
  }

  getCategories(value: boolean) {
    if (!value) {
      this.categories = [];
      console.log('Categories cleared');
    } else {
      this.categories = this.categoryService.getCategories();
      console.log('Categories loaded:', this.categories);
    }
  }

  
}
