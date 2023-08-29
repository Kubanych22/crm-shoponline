console.log('\nЗадания на this\n');
// eslint-disable-next-line no-undef
console.log('%c\n\nЗадача 1:\n', rainbow);

const checkValue = (value) => {
  if (isNaN(value)) {
    console.log('Параметр не является числом.');
    return false;
  }
  return true;
}
const rectangle = {
  _width: 5,
  _height: 5,
  get getArea() {
    return this._width * this._height + ' см';
  },
  get getPerimeter() {
    return this._width * 2 + this._height * 2 + ' см';
  },
  
  set width(width) {
    if (checkValue(width)) {
      this._width = Math.round(width);
    }
  },
  set height(height) {
    if (checkValue(height)) {
      this._height = Math.round(height);
    }
  },
};

console.log(`Площадь прямоугольника = ${rectangle.getArea}`);
console.log(`Периметр = ${rectangle.getPerimeter}`);
rectangle.width = 10;
rectangle.height = 10;
console.log(`Площадь прямоугольника = ${rectangle.getArea}`);
console.log(`Периметр = ${rectangle.getPerimeter}`);

// rectangle.width = 11.97;
// rectangle.height = 10.4;
// console.log(`Площадь прямоугольника = ${rectangle.getArea}`);
// console.log(`Периметр = ${rectangle.getPerimeter}`);
//
// rectangle.width = 'qwerty';
// rectangle.height = '10.4aaa';
// console.log(`Площадь прямоугольника = ${rectangle.getArea}`);
// console.log(`Периметр = ${rectangle.getPerimeter}`);
