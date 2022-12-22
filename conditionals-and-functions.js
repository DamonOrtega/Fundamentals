/*
 * Conditionals, Functions, Scope and Loops.
 */
/*..*/

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;


if (storeAIsLower) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal")
}