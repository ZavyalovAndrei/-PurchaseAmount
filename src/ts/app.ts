import Cart from "./service/Cart";
import Book from "./domain/Book";
import Cinema from "./domain/Cinema";
import MusicAlbum from "./domain/MusicAlbum";

const cart: Cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Cinema(
    1005,
    "Мстители",
    "The Avengers",
    "IMAX",
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    2012,
    "США",
    "Avengers Assemble!",
    ["фантастика", "боевик", "фентези", "приключения"],
    137,
    350
  )
);

console.log(cart.items);
