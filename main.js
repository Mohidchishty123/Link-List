// main.js
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Testing other methods
list.prepend("rabbit");
console.log(list.toString()); // ( rabbit ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log(list.size()); // 7
console.log(list.head().value); // rabbit
console.log(list.tail().value); // turtle
console.log(list.at(2).value); // cat
list.pop();
console.log(list.toString()); // ( rabbit ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
console.log(list.contains("parrot")); // true
console.log(list.find("hamster")); // 4
list.insertAt("monkey", 3);
console.log(list.toString()); // ( rabbit ) -> ( dog ) -> ( cat ) -> ( monkey ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
list.removeAt(3);
console.log(list.toString()); // ( rabbit ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
