function pivot(arr, start = 0) {

    function swap(arr, i, j) {
        let tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
    }

    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([13, 12, 2, 3, 4, 5, 10, 22, 25]))