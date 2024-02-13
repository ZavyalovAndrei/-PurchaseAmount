import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get summ(): number {
        let result: number = 0;
        this._items.forEach(item => result += item.price);
        return result;
    }

    getiscount(discount: number): number {
        return this.summ - (this.summ * discount)/100;
    }

    remove(id: number): void {
        this._items = this._items.filter(item => item.id!== id);
    }
}