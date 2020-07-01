//google q
//given array = [2,5,1,2,3,5,1,2,4]
//it shouldreturn 2

//given an array = [2,1,1,2,3,5,1,2,4]
//should return 1

//given an array = [2,3,4,5]
//should return undefined

function firstRepeatNum(array) {
    const hashMap = new Map();
    for(let i = 0; i < array.length; i++) {
        if(!hashMap.get(array[i])) {
            hashMap.set(array[i], 1)
        } else {
            return array[i]
        }
    }
    return undefined
}

console.log(firstRepeatNum([2,3,4,5]))