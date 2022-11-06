const {LinkList,Node} = require('./main')
// Delete First occur of given key
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8]);

function deleteLLByKey(key) {
    console.log("Before", JSON.stringify(ll.head))
    let temp = ll.head;let found = false;
    while(temp && !found) {
        if(temp.next.element == key) {
            found = true; 
            temp.next = temp.next.next;
        }
        temp = temp.next;
    }
    if(!found) console.log("Key not found")
    console.log("After", JSON.stringify(ll.head))
}
deleteLLByKey(2)
