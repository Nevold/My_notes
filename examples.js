function isPalindrom(word) {
  return console.log(word == word.split('').reverse().join(''));
}
isPalindrom('abbab');

function shortWord(word) {
  return console.log(
    word
      .split(' ')
      .sort((a, b) => a.length - b.length)
      .shift()
  );
}
shortWord('SS ffff gggggg fff');

function inisial(word) {
  return console.log(
    word
      .split(' ')
      .reduce((acc, curr) => acc + curr.split('').shift() + '.', '')
      .toUpperCase()
  );
}

inisial('dd ff');

function sumNumber(number) {
  return String(Math.abs(number))
    .split('')
    .reduce((acc, curr) => +acc + +curr);
}
console.log(sumNumber(-18));

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([3, 1, 8]));

function duplicat(word) {
  let arr = word
    .toUpperCase()
    .split('')
    .map((item, index) => (item += item.repeat(index).toLowerCase()))
    .join('-');
  return console.log(arr);
}
duplicat('word');

function fooBar(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0) {
      arr.push('foo');
    } else if (i % 5 == 0) {
      arr.push('bar');
    } else arr.push(i);
  }
  return arr;
}

console.log(fooBar(6));

function Mass() {
  let arr = [...arguments].flat();
  let newArr = new Set(arr);
  console.log([...newArr]);
}
Mass([1, 2], [2, 4, 1]);
