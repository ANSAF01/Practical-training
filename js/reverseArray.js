// Reverse an array in-place
function reverseArrinPlace(arr){
    if(arr.length<=1){
        return arr;
    }
let left = 0;
let right = arr.length-1;

while(left<right){
    [arr[left],arr[right]] = [arr[right],arr[left]]
    left++;
    right--;
}
return arr;
}

console.log(reverseArrinPlace([1,2,3,4,5]));

console.log(reverseArrinPlace([]));

console.log(reverseArrinPlace([1]))

console.log(reverseArrinPlace([1,2]))

console.log(reverseArrinPlace([1,2,3]))

console.log(reverseArrinPlace(["a","b","c"]))

console.log(reverseArrinPlace([true,false]))
