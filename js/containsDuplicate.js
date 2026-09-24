function containDuplicates(nums){
    const seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return true;
        }
        seen.add(num)
    }
    return false;
}

console.log(containDuplicates([1,2,3,1])); 
console.log(containDuplicates([1,2,3,4])); 