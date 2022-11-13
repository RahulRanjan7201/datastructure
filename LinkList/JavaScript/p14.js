const {LinkList,Node} = require('./main')
// De4lete Nth Node from End 
const ll = new LinkList();
function addElements(data) {
    for(let ele of data) {
        ll.add(ele)
    }
}
addElements([1]);