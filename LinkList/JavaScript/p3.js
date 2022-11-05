const {LinkList,Node} = require('./main')
// Add a Node at beginning of LL 
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8]);
function addElementAtBegin(element) {
    console.log("Before", JSON.stringify(ll.head));
    const node = new Node(element);
    const head = ll.head;
    const temp = head; 
    ll.head = node; 
    ll.head.next = temp; 
    console.log("After", JSON.stringify(ll.head));
}
addElementAtBegin(200)