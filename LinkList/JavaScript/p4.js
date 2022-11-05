const {LinkList,Node} = require('./main')
// Add a Node after Previous Node
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8]);

function addNodeAfterPrevious(prevNode, element) {
    console.log(JSON.stringify(ll.head))
    let node = new Node(element) ;
    let temp = ll.head; let found = false;
    while(temp && !found) {
        if(temp.element == prevNode) {
            found = true;
            node.next = temp.next; 
            temp.next = node;
        }
        temp = temp.next;
    }
   console.log(JSON.stringify(ll.head))
}
addNodeAfterPrevious(4, 12);