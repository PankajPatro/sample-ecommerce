import { ItemData } from "../models/itemData";

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

export class ItemDataService {
    private loadItems() {
        const randomItemCount = randomIntFromInterval(15, 35);
        const items: ItemData[] = [] as ItemData[];
        for (var i = 0; i < randomItemCount; ++i) {
            const randomTitleIndex = randomIntFromInterval(0, Title.length - 1);
            const randomTitleDescriptionIndex = randomIntFromInterval(0, TitleDescription.length - 1);
            const randomCategoryIndex = randomIntFromInterval(0, Category.length - 1);
            const randomImageUrlIndex = randomIntFromInterval(0, ImageUrl.length - 1);
            items.push({
                category: Category[randomCategoryIndex],
                id: i,
                imageDescription: TitleDescription[randomTitleDescriptionIndex],
                imageUrl: "assets/stock_images/" + ImageUrl[randomImageUrlIndex],
                imageTitle: Title[randomTitleIndex]
            })
        }
        return [...items];
    }

    getItems(): ItemData[] {
        let itemData: ItemData[] = [];
        let itemsDataAsString = sessionStorage.getItem("itemData") as string;
        if (itemsDataAsString) {
            itemData = JSON.parse(itemsDataAsString) as ItemData[];
        }
        else {
            const itemDataLoaded = this.loadItems();
            sessionStorage.setItem("itemData", JSON.stringify(itemDataLoaded));
            itemsDataAsString = sessionStorage.getItem("itemData") as string;
            itemData = JSON.parse(itemsDataAsString) as ItemData[];
        }
        return itemData;
    }
}