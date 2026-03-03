import { Component, inject } from '@angular/core';
import { ProductCartService } from '../../services/product-cart/product-cart.service';
import { CartListItemComponent } from '../cart-list-item/cart-list-item.component';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-order-confirmed-modal',
  imports: [CartListItemComponent, CurrencyPipe],
  templateUrl: './order-confirmed-modal.component.html',
  styleUrl: './order-confirmed-modal.component.css'
})
export class OrderConfirmedModalComponent {
  cartService = inject(ProductCartService);
}
