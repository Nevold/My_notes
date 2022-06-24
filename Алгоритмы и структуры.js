// Линейный поиск
//  просто проход по всему массиву и, сравнивая, находим нужный
{
  const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
  let count = 0;
  function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
      count += 1;
      if (array[i] === item) {
        return i;
      }
    }
    return null;
  }
}

// Бинарный поиск. Итеративный(без рекурсий) подход .На ОСТСОРТИРОВАННОМ массиве
// Делим примерно пополам, если искомый элемент находится например справа
//  используем только правую часть массива и также далее снова делим и проверяем
{
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let count = 0;

  function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
      count += 1;
      middle = Math.floor((start + end) / 2);
      if (array[middle] === item) {
        found = true;
        position = middle;
        return position;
      }
      if (item < array[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return position;
  }
}
// Сортировка алгоритмом выбора
//Берем за минимальный i-элемент и пробегаем по массиву во 2 цикле с i+1 элементом сравнивая его с остальными и заменяем
{
  const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]; // [0,1,1,2,3.......]
  let count = 0;

  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[indexMin]) {
          indexMin = j;
        }
        count += 1;
      }
      let tmp = array[i];
      array[i] = array[indexMin];
      array[indexMin] = tmp;
    }
    return array;
  }
}

// Пузырьковая сортировка
//  в двух циклах сравниваем каждый со следующим и заменяем по чуть чуть
{
  const arr = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
    -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,
  ];
  let count = 0;

  function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j + 1] < array[j]) {
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
        count += 1;
      }
    }
    return array;
  }
}
// Быстрая сортировка

const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1,
  -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,
];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
// Связный список
{
  class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return this.size
    }

    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result);;
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(5)
list.add(3)
list.add(2)
list.add(5)
list.add(7)

list.print()
}
// Бинарное дерево поиска
// В дереве только 2 потомка, которые тоже являются деревом , которые добавляются особым способом, если значение меньше - то влево, если больше - вправо
{
class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)
        } else {
            let node = this.root
            let newNode = new TreeNode(value)
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                }
            }
            if (value > node.value) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }
    }

    print(root = this.root) {
        if (!root) {
            return true;
        }
        console.log(root.value);
        this.print(root.left)
        this.print(root.right)
    }
}

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()
}
