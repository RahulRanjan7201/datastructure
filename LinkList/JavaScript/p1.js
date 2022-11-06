const {LinkList} = require('./main')
// Print All the elements of linklist 

// 1. Add the elements 
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8])
function printLL() {
    console.log(ll.head)
    let current= ll.head;
    while(current) {
        current = current.next;
    }
}
printLL();