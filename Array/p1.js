// Reverse the Array 

function reverse(arr) {
    let low =0; let high = arr.length-1; 
    while(low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low ++; high--;
    }
    return arr;
}

console.log(reverse([1,2, 3, 4, 5]))