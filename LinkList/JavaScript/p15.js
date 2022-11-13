
const {LinkList,Node} = require('./main')
// reverse by k from end
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1, 2, 3, 4, 5, 6]);

function reverseByK(K) {
    let temp =ll.head; let count =0;
    while(temp) {
        count++;
        temp = temp.next
    }
    const listTraverseTill = count - K +1;let steps =0;let foundEle;
    let _temp = ll.head;let prev = null;
    while(_temp) {
        steps++;
        if(steps == listTraverseTill) {
            prev.next = null; 
            foundEle = _temp;
        }
        if(!_temp.next) {
            _temp.next = ll.head; 
            ll.head = foundEle;
            break;
        }
        prev = _temp;
        _temp = _temp.next;
    }
    console.log(JSON.stringify(ll.head))
    return ll.head;
}
console.log(reverseByK(2))