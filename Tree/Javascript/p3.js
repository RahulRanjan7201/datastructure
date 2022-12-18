// Inorder
const {Node} = require("./utility")
function  Inorder(root) {
    if(!root) return ;
    Inorder(root.left);
    console.log(root.data);
    Inorder(root.right);
}
const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
Inorder(root)
