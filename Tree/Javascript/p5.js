// PostOrder
const {Node} = require('./utility')
function postOrder(root) {
    if(!root) return;
    postOrder(root.left);
    postOrder(root.right)
    console.log(root.data);
}
const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
postOrder(root)