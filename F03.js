// Írj egy függvényt, amely a paraméterként megadott tízes számrendszerbeli számot átkonvertálja
// kettes, nyolcas és tizenhatos számrendszerbe! Ezeket az értékeket pedig egy objectben adja vissza!
// A property-k neve legyen: binary, octal, hexa.

'use strict';

const converterBtwNumberSystems = (decimal) => ({
    binary: `0b${(decimal >>> 0).toString(2)}`,
    octal: `0o${(decimal >>> 0).toString(8)}`,
    hexa: `0x${(decimal >>> 0).toString(16)}`
});

const converterBtwNumberSystems2 = (decimal) => ({
    binary: parseInt(decimal, 2),
    octal: parseInt(decimal, 8),
    hexa: parseInt(decimal, 16)
});
console.log(converterBtwNumberSystems(16));
console.log(converterBtwNumberSystems2(16));