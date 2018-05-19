const add = ((...nums) => {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
})();