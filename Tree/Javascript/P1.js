
    function  solve (A){
               let arr =[];
               if(!A) return ; 
               let queue = [];
               queue.push(A);
               let current;
               while(queue.length > 0) {
                     let size = queue.length;
                     let i =0; 
                     while(i < size) {
                           i++;
                         //  current = queue[queue.length - 1];
                           const current =queue.shift();
                           if(i==1) {
                                 arr.push(current.data);
                           }
                           if(current.left) {
                                 queue.push(current.left)
                           }
                           if(current.right) {
                                 queue.push(current.right)
                           }
                     }
               } 
               console.log(arr)
               return arr;
       }
    function Node(value){
        this.data = value
        this.left = null
        this.right = null
      }
      const root = new Node(1)
      root.left = new Node(2)
      root.right = new Node(3)
      root.left.right = new Node(4)
      root.left.right.right = new Node(4)

      solve(root)