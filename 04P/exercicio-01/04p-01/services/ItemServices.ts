import { Item } from "../models/Item";

class ItemService {
    private items: Item[] = [];

    getAllItems(): Item[] {
        return this.items;
    }

    addItem(name: string): void {
        const nameItem = name.trim();

        if (nameItem.length <= 2) {
            throw new Error("O nome deve ter mais de 2 caracteres.");
        }

        const duplicateItem = this.items.some(
            (itemAtual) =>
                itemAtual.name.toLocaleLowerCase() ===
                nameItem.toLocaleLowerCase(),
        );

        if (duplicateItem) {
            throw new Error("Já existe um item com esse nome.")
        }

        const newItem: Item = {
            id: Date.now().toString(),
            name: nameItem,
        };
        this.items.push(newItem);
    }
}

export default new ItemService();
