import { Component,computed,inject,input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';
import { Product } from '../../interfaces/product';
import { ProductCartService } from '../../services/product-cart/product-cart.service';

@Component({
  selector: 'app-product-card',
  imports: [AddToCartButtonComponent, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 cart = inject(ProductCartService)

 product = input.required<Product>();

 quantity = computed<number>(() => this.cart.checkQuantity(this.product()));
}
