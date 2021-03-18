import { Injectable } from '@angular/core';
import { ItemDataStore } from './item-data-state/item-data.store';
import { ItemData } from './models/item-data';

export const Title: string[] = [
  "The Coolers", "My Swag", "Not Today", "Bleh Bleh", "Shy Mango", "Crazy Rabbit", "Gold Digger", "Grey Heart", "Dusty Iron", "Creative Crow"
];

export const TitleDescription: string[] = [
  "An apparel for regular use", "You will miss it, if you don't use it.", "You should definitely try this.", "An useful guide", "Treat yourself to this wonderful happening."
];

export const Category: string[] = [
  "Daily Use", "Something Special", "Gift Item"
];

export const ImageUrl: string[] = [
  "charles-deluvio-sWiqbPItyg8-unsplash.jpg", "clark-street-mercantile-P3pI6xzovu0-unsplash.jpg", "marcus-loke-xXJ6utyoSw0-unsplash.jpg", "markus-winkler-PQmXUxmfR44-unsplash.jpg", "parker-burchfield-tvG4WvjgsEY-unsplash.jpg", "stil-D4jRahaUaIc-unsplash.jpg"
];

export const randomIntFromInterval = (min: number, max: number) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private itemDataStore: ItemDataStore) {
  }

  loadDataToStore(){
    const itemsDataAsString = sessionStorage.getItem("itemData");
    if(itemsDataAsString){
      const itemData = JSON.parse(itemsDataAsString) as ItemData[];
      this.itemDataStore.set(itemData);
    }
    else{
      const itemData = this.getItems();
      sessionStorage.setItem("itemData", JSON.stringify(itemData));
      this.itemDataStore.set(itemData);
    }
  }

  updateFilter(filter: string) {
    this.itemDataStore.update({
      ui: {
        filter
      }
    });
  }

  private getItems(): ItemData[] {
    const randomItemCount = randomIntFromInterval(15, 35);
    const items: ItemData[] = [];
    for (var i = 0; i < randomItemCount; ++i) {
      const randomTitleIndex = randomIntFromInterval(0, Title.length-1);
      const randomTitleDescriptionIndex = randomIntFromInterval(0, TitleDescription.length-1);
      const randomCategoryIndex = randomIntFromInterval(0, Category.length-1);
      const randomImageUrlIndex = randomIntFromInterval(0, ImageUrl.length-1);
      items.push({
        category: Category[randomCategoryIndex],
        id: i,
        imageDescription: TitleDescription[randomTitleDescriptionIndex],
        imageUrl: "assets/stock_images/" + ImageUrl[randomImageUrlIndex],
        imageTitle: Title[randomTitleIndex]
      })
    }
    return items;
  }
}
