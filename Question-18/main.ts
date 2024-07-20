// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let placeToVisit: string[] = ["England", "South Korea", "China", "Switzerland", "Australia"]

// • Print your array in its original order.
console.log("Original order:", placeToVisit)

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", placeToVisit.slice().sort());

// • Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placeToVisit)

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", placeToVisit.slice().sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", placeToVisit)

// • Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reverse order:",placeToVisit);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Back to original order:",placeToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order:", placeToVisit.slice().sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Stored in reverse alphabetical order:", placeToVisit.slice().sort().reverse());


