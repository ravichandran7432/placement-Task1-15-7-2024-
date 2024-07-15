function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = nums.reduce((acc, num) => acc + num, 0); 
    return expectedSum - actualSum;
}
const nums = [0, 1, 2, 4]; 
console.log(missingNumber(nums));