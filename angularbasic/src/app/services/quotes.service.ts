import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Quotes{
  quotes : { id: number, quote: string, author: string}[]
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  // mention in app.cnfig.ts inside array => provideHttpClient(), import { provideHttpClient } from '@angular/common/http';
  constructor(private httpClient:HttpClient) { }

  getQuotes(){
    // get konse type ka data return karega usko mention karna padhta hai, jo inster face humne bnaya hai. <Quotes>
    return this.httpClient.get<Quotes>("https://dummyjson.com/quotes")
  }
  
}
