import Buyable from './Buyable';

export default class Cinema implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly englishName: string,
        readonly cinemaSystem: string,
        readonly picture: string,
        readonly year: number,
        readonly country: string,
        readonly tag: string,
        readonly genre: [...string[]],
        readonly time: number,
        readonly price: number,
    ) { }
}