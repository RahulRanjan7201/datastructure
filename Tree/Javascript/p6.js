// Find the Nth node in Inorder Traversal 

const {Node} = require("./utility")
let count =0;
function  Inorder(root, n) {
    if(!root) return ;
    Inorder(root.left, n );
   // console.log(root.data);
    count++;
    if(count == n) { 
        console.log(root.data);
        return;
    }
    Inorder(root.right, n );
}
const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
root.left.right = new Node(5)
root.left.left = new Node(4)
Inorder(root, 4)
