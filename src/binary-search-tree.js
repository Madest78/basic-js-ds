const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null; //инициируем корень
  }

  root() {
    return this._root; //вернем корень
  }

  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode; // добавим корень если дерево пустое.
    } else {
      this. insertNewNode(this._root, newNode); // или добавляем новый узел
    }
  }

  insertNewNode(node, newNode) {
    if (newNode.data < node.data) { // сравниваем новый узел с текущим 
      if (node.left === null) { // если он меньше, отправляем его налево
        node.left = newNode; // если слева пусто вставляем новый узел
      } else {
        this.insertNewNode(node.left, newNode); // если занято, рекурсивно вызываем insertNewNode для лквого потомка
      }
    } else {
      if (node.right === null) {//повторяем то же самое для левой стороны
        node.right = newNode; // вставляем новый узел если тут пусто и он пошел в правую сторону
      } else {
        this.insertNewNode(node.right, newNode); //рекурсивно вызываем insertNewNode для правого потомка
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
class Node { // определяем класс Node 
  constructor(data) { 
    this.data = data; //данные узла
    this.left = null; // ссылка на левого потомка
    this.right = null;//ссылка на правого потомка
  }
}

module.exports = {
  BinarySearchTree
};