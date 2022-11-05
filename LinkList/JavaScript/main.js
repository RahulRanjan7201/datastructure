 class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

 class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        const node = new Node(element);
        if(!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }
}
module.exports = {LinkList,Node};