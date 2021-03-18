import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ItemDataQuery } from '../services/item-data-state/item-data.query';
import { ItemDataService } from '../services/item-data.service';
import { ItemData } from '../services/models/item-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  items$: Observable<ItemData[]> | undefined;

  constructor(private itemDataService: ItemDataService, private itemDataQuery: ItemDataQuery, private cartService: CartService) { }

  ngOnInit(): void {
    this.itemDataService.loadDataToStore();
    this.items$ = this.itemDataQuery.selectVisibleItems$;
  }

  trackByFn(index: number, itemData: ItemData) {
    return itemData.id;
  }

  addToCart(itemData: ItemData){
    this.cartService.add(itemData);
  }
}
