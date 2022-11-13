

const {LinkList,Node} = require('./main')
// Detect loop in LL and make it point to null
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([254, 398 ,52 ,125, 390 ]);
function setLoop(position) {
    let temp = ll.head;
    let count=0 ; let loopPos ; 
    while(temp) {
        count++;
        if(count == position) {
            loopPos = temp;
        }
        if(!temp.next) {
            temp.next = loopPos
            break;
        }
        temp = temp.next;
        
    }
}
// Re visit this question
setLoop(3)
function isLoop() {
    let slow = ll.head;
    let fast = ll.head; 
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast && slow == fast) fast.next = null;;
    }
    return ll.head;
}
console.log(isLoop())