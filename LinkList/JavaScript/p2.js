const {LinkList,Node} = require('./main')
// Add Node at End
// Create a LL and add Elements
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8])
console.log(JSON.stringify(ll.head))
function addElementAtEnd(element) {
    let current = ll.head;
    const node = new Node(element)
    while(current.next) {
        current = current.next;
    }
    current.next = node;
}
addElementAtEnd(100);
console.log(JSON.stringify(ll.head))