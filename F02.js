// Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt típusú adatokat elfogadjon!
// Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-té!

'use strict';

const checkIfNotInSafe = (number) => Number.isSafeInteger(number);

const addIntegerSafely = (accu, nextInteger) => {
    if ((typeof accu === "bigint" || typeof nextInteger === "bigint") || (accu > Number.MAX_SAFE_INTEGER || nextInteger > Number.MAX_SAFE_INTEGER)) {
        accu = BigInt(accu)
        nextInteger = BigInt(nextInteger);
    }
    return (accu + nextInteger) > Number.MAX_SAFE_INTEGER ? BigInt(accu) + BigInt(nextInteger) : accu + nextInteger;
}

const integerArraySum =
    (...integers) => (integers)
        .reduce((accu, nextInteger) => addIntegerSafely(accu, nextInteger));

console.log(integerArraySum(1, 2n, 3, Number.MAX_SAFE_INTEGER, 4, 5, 6, 7, 8, 9));
// console.log(integerArraySum(1, 2n, 3));
