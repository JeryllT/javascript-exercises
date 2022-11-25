const removeFromArray = function(nums, target) {
    let holder = [];
    for (i=0; i < nums.length; i++) {
        if(nums[i] != target) holder.push(nums[i]);
    };
    return holder;

};

// Do not edit below this line
module.exports = removeFromArray;
