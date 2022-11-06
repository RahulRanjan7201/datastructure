const {LinkList,Node} = require('./main')
// Size is loop
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
    ll.head.next.next.next.next = ll.head;
}
addElements([1,2,3,4]);

function loopSize() {
    let slow = ll.head;
    let fast = ll.head; 
    let count =0;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast && slow == fast)  {
            slow = slow.next; 
            while(slow != fast) {
                slow = slow.next;
                count++;
            }
            return count
        }
    }
    return count;
}
console.log(loopSize())