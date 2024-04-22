// Flattening an array of arrays
export function flattening(list) {
    return list.reduce((acc, curr) => acc.concat(curr), []);
}

// Loop function
export function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

// Every function using a loop
export function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

// Every function using the `some` method
export function everySome(array, test) {
    return !array.some((element) => !test(element));
}
