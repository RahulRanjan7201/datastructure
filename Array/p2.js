// Reverse the array in pairs 
function reverseInPairs(arr, k) {
    for(let i=0;i<arr.length;i++) {
        let low =i; let high = Math.min(arr.length -1, i+k-1);
        while(low < high) {
            let temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            low ++; high--;
        }
        i=i+k-1
    }
    return arr;
}

console.log(reverseInPairs([1,2,3,4,5,6,7,8,9], 2))