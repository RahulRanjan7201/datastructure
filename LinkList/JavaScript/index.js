
       function solve (A, B){
           let map = new Map();
          let ans = [];
       for (const element of A) {
           if (map.has(element)) map.set(element, map.get(element) + 1)
           else map.set(element, 1);
       }
       for (const element of B) {
           if (map.has(element)) {
               while(map.get(element) > 0) {
               ans.push(element);
               map.set(element, (map.get(element) - 1))
               }
           }
       }
       let newEle = [];
       for(const [key, value] of map.entries()) {
           if(value > 0) {
              while(map.get(key) > 0) {
                newEle.push(key);
               map.set(key, (map.get(key) - 1))
               } 
           }
       }
       newEle = newEle.sort((a, b)=>  a-b)
       return ans.concat(newEle);
       }
   console.log(solve([ 12, 7 ],  [ 7, 1, 6, 17, 2, 19, 10 ]))