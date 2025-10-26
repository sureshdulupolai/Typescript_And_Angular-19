import { Injectable } from '@angular/core';

// service feture is it dont create multiple object create one object use in multiple time
// api se jo bhi fetch karna hai voh sab bhi idhar hoga
@Injectable({
  providedIn: 'root' // this line mean it not avaliable for any component
})
export class ProductService {

  products=[
    {id: 101, name: "laptop"},
    {id: 102, name: "Mobile"},
    {id: 103, name: "Tablet"}
  ]

  // this function return the list of prod that fething from api
  getProduct(){
    return this.products;
  }

  // filter by id
  getProductById(id:number){
    return this.products.filter(p=>p.id == id)
  }

  addProduct(product:any){
    this.products=[...this.products, product];
  }

}

