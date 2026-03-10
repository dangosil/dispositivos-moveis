import { useState, useEffect } from "react";
import { Item } from "../models/Item";
import ItemServices from "../services/ItemServices";

export class ItemViewModel {
    private _items: Item[] = [];
    private _inputText: string = "";
    private _dialogVisible: boolean = false;

    private setItemsCallback: ((items: Item[]) => void) | null = null;
    private setDialogVisibleCallback: ((visible: boolean) => void) | null =
        null;
    private setInputTextCallback: ((text: string) => void) | null = null;

    get items(): Item[] {
        return this._items;
    }

    get inputText(): string {
        return this._inputText;
    }

    setItemsListener(callback: (items: Item[]) => void) {
        this.setItemsCallback = callback;
    }

    setDialogVisibleListener(callback: (visible: boolean) => void) {
        this.setDialogVisibleCallback = callback;
    }

    setInputTextListener(callback: (text: string) => void) {
        this.setInputTextCallback = callback;
    }

    loadItems(): void {
        this._items = ItemServices.getAllItems();
    }

    addItem(): boolean {
        if (this._inputText.trim()) {
            ItemServices.addItem(this._inputText.trim());
            this.loadItems();
            this.setInputText("");
            return true;
        }
        return false;
    }

    openDialog(): void {
        this._dialogVisible = true;
        this.setDialogVisibleCallback?.(this._dialogVisible);
    }

    closeDialog(): void {
        this._dialogVisible = false;
        this.setDialogVisibleCallback?.(this._dialogVisible);
    }

    setInputText(text: string): void {
        this._inputText = text;
        this.setInputTextCallback?.(this._inputText);
    }
}

export const useItemViewModel = () => {
    const [viewModel] = useState(() => new ItemViewModel());
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [items, setItems] = useState<Item[]>([]);
    const [inputText, setInputText] = useState<string>("");

    useEffect(() => {
        viewModel.setItemsListener(setItems);
        viewModel.setDialogVisibleListener(setDialogVisible);
        viewModel.setInputTextListener(setInputText)
        viewModel.loadItems();
    }, [viewModel]);

    return {
        viewModel,
        items,
        dialogVisible,
        inputText,
    }
};
