// Preorder
const {Node} = require('./utility')
function preorder(root) {
    if(!root) return;
    console.log(root.data);
    preorder(root.left);
    preorder(root.right)
}
const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
preorder(root)