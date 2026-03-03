import { Component, inject, input, computed } from '@angular/core';
import { ProductCartService } from '../../services/product-cart/product-cart.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart-list-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.css'
})
export class CartListItemComponent {
 cartService = inject(ProductCartService);

 productName = input.required<string>();
 productQuantity = input.required<number>();
 productPrice = input.required<number>();
 productTotal = computed(() => this.productQuantity() * this.productPrice())
 ProductImage = input<string>();
 componentType = input<string>();
 removeProduct = () => this.cartService.removeEntireProduct(this.productName());
}
