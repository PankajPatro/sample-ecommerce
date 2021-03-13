import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { combineLatest } from "rxjs";
import { ItemData } from "../models/item-data";
import { ItemDataState, ItemDataStore } from "./item-data.store";

@Injectable({
    providedIn: 'root'
})
export class ItemDataQuery extends QueryEntity<ItemDataState> {
    
    selectFilter$ = this.select(state => state.ui.filter);

    selectVisibleItems$ = combineLatest(
        this.selectFilter$,
        this.selectAll(),
        this.getVisibleItems
    );

    constructor(protected store: ItemDataStore) {
        super(store);
    }

    private getVisibleItems(filter: string, items: ItemData[]): ItemData[] {
        return items.filter(i => i.category.startsWith(filter) || i.imageTitle.startsWith(filter) || i.imageDescription.startsWith(filter));
    }
}

