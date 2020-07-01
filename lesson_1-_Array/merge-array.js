// merge two arrays that are sorted and merge them and sort them.
function mergeSortedArray(arr1, arr2) {
    const newArr = arr1.concat(arr2).sort((a,b) => a-b); //o(n^2)
    return newArr;
}



console.log(mergeSortedArray([0,3,4,31], [4,6,30]))