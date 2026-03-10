import { Item } from '../models/Item';

class ItemService {
    private items: Item[] = [
        
    ];

    getAllItens(): Item[] {
        return this.items;
    }

    addItem(name: string): void {
        const newItem: Item = {
            id: Date.now().toString(),
            name: name,
        };
        this.items.push(newItem);
    }
    
}

export default new ItemService();