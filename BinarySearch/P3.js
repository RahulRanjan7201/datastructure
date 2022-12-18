// Find Total ocur
function totalOcc(arr, key) {
    return lastOcc(arr, key) - firstOccu(arr, key) +1;
}
function firstOccu(arr, key) {
    let low = 0 ; let high = arr.length -1  ; let ans = -1; 
    while(low <= high) {
        let mid = (low + high) / 2;
        if(arr[mid] == key) {
            ans = mid; 
            high = mid -1;
        }
        else if(arr[mid] < key) low = mid +1;
        else high = mid -1;
    }
    return ans;
}
function lastOcc(arr, key) {
    let low = 0 ; let high = arr.length -1  ; let ans = -1; 
    while(low <= high) {
        let mid = (low + high) / 2;
        if(arr[mid] == key) {
            ans = mid; 
            low = mid +1;
        }
        else if(arr[mid] < key) low = mid +1;
        else high = mid -1;
    }
    return ans;
}


console.log(totalOcc([3, 5, 9, 17, 18, 18 , 18], 18));