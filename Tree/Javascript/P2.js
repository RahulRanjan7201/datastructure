//lCA of tree

function lca (A, B, C){
           if(A) {
               if(A.data == B || A.data == C ) {
                   return A; 
               }
               let left_lca = lca(A.left, B, C);
               let right_lca = lca(A.right, B,C);
               if(left_lca && right_lca) return A.data; 
               if(!left_lca && !right_lca) return -1;
               return left_lca ? left_lca : right_lca;
           }
           return null;
       }
       function Node(value){
        this.data = value
        this.left = null
        this.right = null
      }
      const root = new Node(1)
      root.left = new Node(2)
      root.right = new Node(3)
      root.left.left = new Node(4)
      root.left.right = new Node(5)
console.log(lca(root, 100,400))