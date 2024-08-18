// LinkedList.js
import { Node } from './Node.js';

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }
        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let currentNode = this.headNode;
        if (currentNode === null) return null;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        let currentNode = this.headNode;
        let count = 0;
        while (currentNode !== null) {
            if (count === index) return currentNode;
            count++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    pop() {
        if (this.headNode === null) return;

        if (this.headNode.nextNode === null) {
            this.headNode = null;
            return;
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    contains(value) {
        let currentNode = this.headNode;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.headNode;
        let index = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.headNode;
        while (currentNode !== null) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        return result + 'null';
    }

    // Extra credit methods
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const prevNode = this.at(index - 1);
        if (prevNode === null) return;
        const newNode = new Node(value, prevNode.nextNode);
        prevNode.nextNode = newNode;
    }

    removeAt(index) {
        if (index === 0 && this.headNode !== null) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        const prevNode = this.at(index - 1);
        if (prevNode === null || prevNode.nextNode === null) return;
        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}
