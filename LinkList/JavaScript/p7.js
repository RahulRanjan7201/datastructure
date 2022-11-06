const {LinkList,Node} = require('./main')
// Find the middle element of linklist
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8, 20, 30]);

function findMiddleElement() {
    let slow = ll.head;
    let fast = ll.head; 
    while(fast && fast.next) {
        slow = slow.next;
        fast= fast.next.next;
    }
    console.log("middle element is", slow.element)
}
findMiddleElement();