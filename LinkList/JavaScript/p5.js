const {LinkList,Node} = require('./main')
// Reverse a LinkList
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8]);

function reverseLL() {
    console.log("Before", JSON.stringify(ll.head)) 
    let prev =null, current = ll.head, next=null ; 
    while(current) {
        next = current.next;
        current.next = prev; 
        prev = current;
        current = next;
    }
    ll.head = prev;
    console.log("After", JSON.stringify(ll.head))
}
reverseLL()
