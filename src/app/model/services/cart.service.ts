import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { CartItem } from '../cart-item';
import { ModelModule } from '../model.module';
import { Product } from '../product';

@Injectable({
  providedIn: ModelModule
})
export class CartService {

  private items:CartItem[] = [];

  constructor() { }

  findItem(product:Product) {
    return this.items.find(
      (i) => {
        i.id == product.id 
      }
    )
  }

  addProduct(product:Product) {
    let item = this.findItem(product);
    if(item) {
      item.increaseQuantity()
    } else {
      this.items.push(
        new CartItem(product)
      )
    }
  }

}
