// Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú,
// tetszőleges méretű egész számot összead, és visszatér az összeadás végeredményével!
// A paraméterként kapott értékek egyszerű number típusúak legyenek!
// Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt,
// automatikusan konvertáljad BigIntbe, és így számoljunk tovább, és természetesen a visszatérési érték is BigInt legyen!

'use strict';

const checkIfNotInSafe = (number) => Number.isSafeInteger(number);

// let isBigCalc = false;
// let sum;

const addIntegerSafely = (accu, nextInteger) => {
    if (accu > Number.MAX_SAFE_INTEGER || nextInteger > Number.MAX_SAFE_INTEGER) {
        accu = BigInt(accu)
        nextInteger = BigInt(nextInteger);
    }
    return (accu + nextInteger) > Number.MAX_SAFE_INTEGER ? BigInt(accu) + BigInt(nextInteger) : accu + nextInteger;
}

const integerArraySum =
    (...integers) => (integers)
        .reduce((accu, nextInteger) => addIntegerSafely(accu, nextInteger));

console.log(integerArraySum(1, 2, 3, Number.MAX_SAFE_INTEGER, 4, 5, 6, 7, 8, 9));
