'use strict';

console.log('%cЗадача 2:', rainbow);

const myWeight = 2;

const speedLight = 3e8;

const catEnergy = myWeight * speedLight ** 2;

console.log(`%cЭнергия моего кота составляет ${catEnergy} дж.\n
Или в экспоненциальной форме ${catEnergy.toExponential()} дж.`, rainbow);
