import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { ItemData } from "../models/item-data";

export interface ItemDataState extends EntityState<ItemData, number> {
    ui: {
        filter: string
    };
}

const initialState = {
    ui: { filter: '' }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'itemdatas' })
export class ItemDataStore extends EntityStore<ItemDataState> {
    constructor() {
        super(initialState);
    }
}
