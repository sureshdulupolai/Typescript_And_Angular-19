import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProdcutsAPI{
  products: {id : number, title: string, description: string, category: string, price: number, discountPercentage: number, stock: number, tags: string[], images: string[]}[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private httpClient:HttpClient) { }


  getProducts(){
    return this.httpClient.get<ProdcutsAPI>("https://dummyjson.com/products")
  }
}
