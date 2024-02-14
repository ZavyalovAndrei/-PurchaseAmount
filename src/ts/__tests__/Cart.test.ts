import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Cinema from "../domain/Cinema";

let cart = new Cart();

test("new card should be empty", () => {
  const testCart = new Cart();
  expect(testCart.items.length).toBe(0);
});

test("should be 3 positions in the card when they are added", () => {
  cart.add(new Book(1001, "Librarian", "Mikhail Elizarov", 2007, 600));
cart.add(new MusicAlbum(1002, "Grave Digger", "Mob Tactics", 1200));
cart.add(
  new Cinema(
    1003,
    "Оппенгеймер",
    "Oppenheimer",
    "IMAX",
    "https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg",
    2023,
    "США",
    "Oppenheimer",
    ["биография", "драма", "история"],
    180,
    400
  )
);
  expect(cart.items.length).toBe(3);
});

test("should be return total summ (2200) of items", () => {
  expect(cart.summ).toBe(2200)
});

test("should be return total summ (2090) of items with discount 5%", () => {
  expect(cart.getiscount(5)).toBe(2090);
});

test("should be 2 positions in the card after removing one", () => {
  cart.remove(1002);
  expect(cart.items.length).toBe(2);
});