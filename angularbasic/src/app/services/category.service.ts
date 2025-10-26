import { Injectable } from '@angular/core';

@Injectable() // my component not available for all 

export class CategoryService {

  categories = [
    {id: 'C1', name: "Electronics"},
    {id: 'C2', name: "Clothes"}
  ]

  getCategories(){
    return this.categories
  }
}
