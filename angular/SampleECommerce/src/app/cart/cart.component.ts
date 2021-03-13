import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartQuery } from '../services/cart-state/cart.query';
import { CartService } from '../services/cart.service';
import { CartData } from '../services/models/cart-data';
import { ItemData } from '../services/models/item-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems$: Observable<CartData[]> | undefined;
  constructor(private cartQuery: CartQuery, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartitems$ = this.cartQuery.selectAll();
  }

  trackByFn(index: number, cartData: CartData) {
    return cartData.id;
  }

  remove(itemData: ItemData){
    this.cartService.remove(itemData);
  }
  
}
