import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { CartData } from "../models/cart-data";

export interface CartState extends EntityState<CartData, number> {
    ui: {
        count: number
    };
}

const initialState = {
    ui: { count: 0 }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
    constructor() {
        super(initialState);
    }
}
