import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListingService {
  productList:Product[] = [];

  private http = inject(HttpClient);

  getData() {
    this.http.get<Product[]>("./data.json").subscribe((result) => {
      this.productList = result;
    });
  }

  constructor() {
    this.getData()
   }
}
