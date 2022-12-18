// Find first occurance of number
function firstOccu(nums, target) {
    let low =0; let high = nums.length -1; 
    let ans = -1 ; 
    while(low <= high) {
        let mid = (low + high ) / 2
        if(nums[mid] == target) {
            ans = mid; 
            high = mid -1; 
        }
        else if(nums[mid] < target){
            low = mid +1 ;
        }
        else high = mid -1; 
    }
    return ans;
}

console.log(firstOccu([3, 5, 9, 17, 18, 18 , 18], 18));