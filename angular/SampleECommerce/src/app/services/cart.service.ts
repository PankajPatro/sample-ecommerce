import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { CartQuery } from './cart-state/cart.query';
import { CartStore } from './cart-state/cart.store';
import { ItemData } from './models/item-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartStore: CartStore, private cartQuery: CartQuery) { }

  add(itemData: ItemData) {
    this.cartQuery.selectEntity(itemData.id).pipe(first()).subscribe(item => {
      if (item) {
        const id: number = item.id;
        this.cartStore.update(id, { count: item.count + 1 });
      }
      else {
        this.cartStore.add({
          itemData: itemData,
          count: 1,
          id: itemData.id
        });
      }
      const newCount = this.cartStore.getValue().ui.count + 1;
      this.cartStore.update({
        ui: {
          count: newCount
        }
      });
    })
  }

  remove(itemData: ItemData) {
    this.cartQuery.selectEntity(itemData.id).pipe(first()).subscribe(item => {
      if (item) {
        const id: number = item.id;
        if(item.count === 1){
          this.cartStore.remove(id);
        }
        else{
          this.cartStore.update(id, { count: item.count - 1 });
        }
        const newCount = this.cartStore.getValue().ui.count - 1;
        this.cartStore.update({
          ui: {
            count: newCount
          }
        });
      }
    })
  }
}
