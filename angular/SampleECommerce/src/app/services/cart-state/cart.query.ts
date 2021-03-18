import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { combineLatest } from "rxjs";
import { ItemData } from "../models/item-data";
import { CartState, CartStore } from "./cart.store";

@Injectable({
    providedIn: 'root'
})
export class CartQuery extends QueryEntity<CartState> {
    
    count$ = this.select(state => state.ui.count);

    constructor(protected store: CartStore) {
        super(store);
    }

    
}

