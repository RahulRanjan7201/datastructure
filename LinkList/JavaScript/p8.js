const {LinkList,Node} = require('./main')
// Detect loop in LL
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
    ll.head.next.next.next.next = ll.head;
}
addElements([1,2,3,4]);

function isLoop() {
    let slow = ll.head;
    let fast = ll.head; 
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast && slow == fast) return true;
    }
    return false;
}
console.log(isLoop())