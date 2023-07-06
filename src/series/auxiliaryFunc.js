const getMax = (nums) => {
    let max = nums[0] ?? 0;
    nums.forEach((n)=>{
        if(n>max) max = n;
    });
    return max;
}
const getMin = (nums) => {
    let min = nums[0] ?? 0;
    nums.forEach((n)=>{
        if(n<min) min = n;
    });
    return min;
}


module.exports = {
    getMax,
    getMin
}