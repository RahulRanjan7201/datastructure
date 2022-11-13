const {LinkList,Node} = require('./main')
// reverse by k
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1, 2, 3, 4, 5, 6]);
function reverseList (A, B){
    if (A == null)
        return null;
    let current = A;
    let next = null;
    let prev = null;
     let count = 0;
       while (count < B && current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }
    if (next != null)
        A.next = reverseList(next, B);

    // prev is now head of input list
    return prev;
}
reverseList(ll.head, 2)