const {LinkList,Node} = require('./main')
//Given a linked list A, swap every two adjacent nodes and return its head.
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1, 2, 3, 4]);
function swap(A) {
    let temp = A; let prev = null;let curr = null  ; 
    while(temp) {
        if(temp.next) {
            prev = temp.next; 
            temp.next = temp.next.next;
            prev.next = temp; 
        } 
        curr = prev
        temp = temp.next;
    }
    console.log(JSON.stringify(A))
}
swap(ll.head)