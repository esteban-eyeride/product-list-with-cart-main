import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  cart = signal<Product[]>([]);
  orderConfirmed = signal<boolean>(false);

  cartQuantiy = computed<number>(() =>
    this.cart().map((p) => {
      return p.quantity ?? 0
    }).reduce((partialSum, a) => partialSum + a, 0)
  );
  orderTotal = computed<number>(() =>
    this.cart().map((p) => {
      return p.price * (p.quantity ?? 0)
    }).reduce((partialSum, a) => partialSum + a, 0)
  );

  addProduct(product:Product) {
    this.cart.update((cart) => {
      const exist = cart.find (p => p.name === product.name);

      if (exist) {
        return cart.map(p =>
          p.name === product.name
          ? { ...p, quantity: (p.quantity ?? 0) + 1}
          : p
        )
      } else {
        return [...cart, {...product, quantity: 1}]
      }
    });
  }

  removeProduct(product:Product) {
    this.cart.update((cart) => {
      const exist = cart.find(p => p.name === product.name);

      if (!exist) return cart
      else {
        if (exist.quantity && exist.quantity > 1) {
          return cart.map( p =>
            p.name === product.name
            ? {...p, quantity: (p.quantity ?? 2) - 1}
            :p
          );
        } return cart.filter((p) => p.name !== product.name)
      }
    });
  }

  removeEntireProduct(productName:string) {
    this.cart.update((cart) => {
      return cart.filter((p) => p.name !== productName)
    });
  }

  checkQuantity(product:Product):number {
    const exist = this.cart().find(item => item.name === product.name);
    if (exist?.quantity) {
      return exist.quantity;
    } else {
      return 0;
    }
  }

  confirmOrder() {
    this.orderConfirmed.set(true);
  }

  startNewOrder() {
    this.cart.set([]);
    this.orderConfirmed.set(false);
  }

  constructor() { }
}
