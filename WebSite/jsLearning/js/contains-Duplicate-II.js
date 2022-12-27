function containsNearbyDuplicate(nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return nums[i]
        } else {
            map.set(nums[i], i)
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))