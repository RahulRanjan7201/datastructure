const {LinkList,Node} = require('./main')
// Given a singly linked list A

//  A: A0 → A1 → … → An-1 → An 
// reorder it to:

//  A0 → An → A1 → An-1 → A2 → An-2 → … 
// You must do this in-place without altering the nodes' values.
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1, 2, 3, 4,5]);
function reorderList() {
    let temp = ll.head;
    while(temp.next) {
        let nextNode = temp.next;
        let _temp = temp.next; 
        let prev;
        while(_temp) {

           // if(_temp == nextNode) break;
            if(!_temp.next) {
                if(nextNode == _temp) {
                    console.log(JSON.stringify(ll.head))
                    return ll.head
                }
                _temp.next = nextNode;
             temp.next = _temp;
             prev.next = null;
             break;
            }
            
            prev = _temp;
            _temp = _temp.next;
        }
        temp = temp.next.next;
    }
    console.log(JSON.stringify(ll.head))
}
reorderList();
