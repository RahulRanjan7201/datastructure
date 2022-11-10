const {LinkList,Node} = require('./main')
// De4lete Nth Node from End 
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1]);

function DeleteNthNode(index) {
    let temp =ll.head; let count =0;
    while(temp) {
        count++;
        temp = temp.next
    }
    if(count < index) return ll.head;
    else {
        const listTraverseTill = count - index +1;let steps = 0;
        let _temp = ll.head;let prev = null;
        while(_temp) {
             steps++; 
             if(steps == listTraverseTill) {
                 if( prev && prev.next)
                prev.next = _temp.next;
                else ll.head = null;
                return ll.head;
             }
             prev = _temp;
             _temp = _temp.next;
        } 
    }
}

console.log(DeleteNthNode(1))

