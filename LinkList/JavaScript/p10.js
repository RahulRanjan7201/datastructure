const {LinkList,Node} = require('./main')
// Find the Number of occur of 1 in LL 
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1,2,3,4,5,8,1,1,6,1]);

function findOcc() {
    let temp = ll.head; 
    let count = 0;
    while(temp) {
        if(temp.element == 1) count++;
        temp = temp.next;
    }
    return count;
}
console.log(findOcc())