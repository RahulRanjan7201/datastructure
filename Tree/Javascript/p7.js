// Heights of tree
const {Node} = require("./utility")
let root;
function height(root){
    if(!root) return 0;
    else {
        let L_H= height(root.left);
        let R_H = height (height.right);
        let height_tree = Math.max(L_H, R_H) +1;
        return height_tree
    }
}



 root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.right.right = new Node(7)
root.left.right = new Node(5)
root.left.right.left = new Node(6)
root.left.left = new Node(4)
console.log(height(root))