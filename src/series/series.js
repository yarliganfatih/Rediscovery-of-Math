/* SERIES */
// Meanwhile arrays here

const { isNegative, isPositive, abs, getCoefficient, invertByAdd, invertByMult } = require('../numbers/auxiliaryFunc'); // -1*a
const { add, subt, mult, divi, remainder } = require('../numbers/numbers');
const { sqrt, log } = require('../primeDivisors/primeDivisors');

const sum = (nums, func=(n)=>n) => { // like basic.sum()
    return nums.reduce((sum, n) => add(sum, func(n)), 0);
}

const mod = (nums) => {
    let _nums = nums.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null)); // group by and count
    let __nums = Object.entries(_nums).sort(([,a],[,b]) => invertByAdd(subt(a, b))); // sorting DESC
    let mods = [ Number(__nums[0][0]) ];
    while(__nums[mods.length][1] == __nums[mods.length-1][1]){
        mods.push(Number(__nums[mods.length][0]));
    }
    return mods;
}

const median = (nums) => {
    nums.sort((a, b) => subt(a, b));
    let nLen = nums.length;
    let medianIndex = divi(nLen, 2);
    if(remainder(nLen, 2)==1) return nums[medianIndex];
    return [nums[subt(medianIndex, 1)], nums[medianIndex]];
}

const arithmeticMean = (nums) => {
    let sum = nums.reduce((sum, n) => add(sum, n), 0);
    return divi(sum, nums.length);
}

const geometicMean = (nums) => {
    let foundAgainst = nums.findIndex(n => !isPositive(n));
    if(foundAgainst!=-1) return undefined;
    let product = nums.reduce((sum, n) => mult(sum, n), 1);
    return sqrt(product, nums.length);
}

const harmonicMean = (nums) => {
    let foundAgainst = nums.findIndex(n => !isPositive(n));
    if(foundAgainst!=-1) return undefined;
    return divi(nums.length, sum(nums, invertByMult));
}


module.exports = {
    sum,
    mod,
    median,
    arithmeticMean,
    geometicMean,
    harmonicMean
}