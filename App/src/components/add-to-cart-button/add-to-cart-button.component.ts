import { Component,inject,input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductCartService } from '../../services/product-cart/product-cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.css'
})
export class AddToCartButtonComponent {
cartService = inject(ProductCartService);

productCount = input.required<number>();
product = input.required<Product>();

addProduct = () => this.cartService.addProduct(this.product());
removeProduct = () => this.cartService.removeProduct(this.product());

}
