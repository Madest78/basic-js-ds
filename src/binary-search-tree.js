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

  has(data) {
    return this.search(this._root, data); //запускаем поиск от корня
  }

    search(node, value) {
      if (node === null) { //если мы достигли листьев и не нашли значение
        return false;
      }
      if (node.data === value) {//если нашли искомый узел с первого шага
        return true;
      }
      if (value < node.data) { //если искомое значение меньше текущего узлаб идем влево
        return this.search(node.left, value);
      } else { // иначе идем вправо
        return this.search(node.right, value);
      }
    }

  find(data) {
    return this.findNode(this._root, data); //запускаем поиск от корня
  }

  findNode(node, value) {
    if (node === null) { //если мы достигли листьев и не нашли значение
      return null;
    }
    if (node.data === value) {//если нашли искомый узел с первого шага
      return node;
    }
    if (value < node.data) { //если искомое значение меньше текущего узлаб идем влево
      return this.findNode(node.left, value);
    } else { // иначе идем вправо
      return this.findNode(node.right, value);
    }
  } 

  remove(data) {
    this._root = this.removeNode(this._root, data); //запускаем удаление от корня дерева
  }

  removeNode(node, value) {
    if (node === null) { //если мы достигли листьев и не нашли значение
      return null;
    }
    if (value === node.data) { // у удаляемого узла нет потомков
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) { // у удаляемого узла 1 потомок
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }
                                // у удаляемого узла 2 потомка
      const minRightNode = this.findMinNode(node.right); //находим наименьший узел в правом поддереве
      node.data = minRightNode.data; // присваиваем его значение узлу который хотим удалить
      node.right = this.removeNode(node.right, minRightNode.data); // удаляем ранее найденный наименьший узел правого поддерева
    } else if (value < node.data) {
      node.left = this.removeNode(node.left, value); // идем в левое поддерево для удаление
    } else {
      node.right = this.removeNode(node.right, value); // идем в правое дерево для удаления
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) { // находим узел с наименьшим значениемб двигаясь влево
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.root) {
      return null; // в случае пустого дерева возвращаем null
    }
    let currentNode = this._root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left; //двигаемся вглубь дерева до нижнего левого листа
    }
    return currentNode.data; // возвращаем данные из наименьшнго узла
  }

  max() {
    if (!this.root) {
      return null; // в случае пустого дерева возвращаем null
    }
    let currentNode = this._root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right; //двигаемся вглубь дерева до нижнего правого листа
    }
    return currentNode.data; // возвращаем данные из наибольшего узла
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