import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from "../components/product-card/product-card.component";
import { CartListComponent } from "../components/cart-list/cart-list.component";
import { ProductListingService } from '../services/product-listing/product-listing.service';
import { Product } from '../interfaces/product';
import { OrderConfirmedModalComponent } from '../components/order-confirmed-modal/order-confirmed-modal.component';
import { ProductCartService } from '../services/product-cart/product-cart.service';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, CartListComponent,OrderConfirmedModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-list-with-cart';

  porductListService = inject(ProductListingService);
  productCart = inject(ProductCartService);

  productList:Product[] = this.porductListService.productList;

  constructor() {
    this.porductListService.getData();
    console.log(this.productList)
  }
}
