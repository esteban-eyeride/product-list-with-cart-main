import { Component, inject,computed, signal } from '@angular/core';
import { CartListItemComponent } from "../cart-list-item/cart-list-item.component";
import { ProductCartService } from '../../services/product-cart/product-cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  imports: [CartListItemComponent,CurrencyPipe],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  cartService = inject(ProductCartService);

  cartSize = this.cartService.cartQuantiy;
  cartContent = this.cartService.cart;
  cartTotal = this.cartService.orderTotal;
}
