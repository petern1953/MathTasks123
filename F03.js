// Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja
// kettes, nyolcas, és tizenhatos számrendszerbe is! Ezeket az értékeket pedig egy objectbe adja vissza!
// A property-k neve legyen: binary, octal, hexa.

'use strict';

const converterBtwNumberSystems = (decimal) => ({
    binary: `0b${(decimal >>> 0).toString(2)}`,
    octal: `0o${(decimal >>> 0).toString(8)}`,
    hexa: `0x${(decimal >>> 0).toString(16)}`
});

console.log(converterBtwNumberSystems(16));