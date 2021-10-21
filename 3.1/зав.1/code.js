let a = prompt('Введіть кількість місяців: ');
let result = Math.trunc(a/12);
let result2 = a%12;

document.write('Кількість років: '+ result + '  Кількість місяців: '+ result2);